"use client";
import { HTMLAttributes, FC } from "react";
import "../index.css";
import { twMerge } from "tailwind-merge";
import {
  CalendarEventProps,
  CalendarDayProps,
  CalendarWeekProps,
  CalendarDaysProps,
  CalendarHeaderProps,
  CalendarButtonProps,
  CalendarMonthYearProps,
} from "../types/index";

const CalendarToolbar: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge("flex items-center justify-center gap-4", className)}
      {...props}
    />
  );
};

const CalendarYearPrev: FC<CalendarButtonProps> = ({ onClick, ...props }) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarYearNext: FC<CalendarButtonProps> = ({ onClick, ...props }) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarMonthPrev: FC<CalendarButtonProps> = ({ onClick, ...props }) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarMonthNext: FC<CalendarButtonProps> = ({ onClick, ...props }) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarMonthYear: FC<CalendarMonthYearProps> = (props) => {
  return (
    <div {...props}>
      {" "}
      {props.date.toLocaleString("default", { month: "long" })}{" "}
      {props.date.getFullYear()}{" "}
    </div>
  );
};

const CalendarGrid: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <table
      className={twMerge("w-full border-collapse border", className)}
      {...props}
    />
  );
};

const CalendarHeader: FC<CalendarHeaderProps> = ({ day }) => {
  return <th className={twMerge("border text-center")}>{day}</th>;
};

const CalendarHeaders: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <thead>
      <tr className="grid grid-cols-7">
        {daysOfWeek.map((day, index) => (
          <CalendarHeader day={day} key={index} />
        ))}
      </tr>
    </thead>
  );
};

const CalendarEvent: FC<CalendarEventProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-1 px-4">
      <div className="mr-2 h-2 w-2 rounded-full bg-red-500" />
      <p>{title}</p>
    </div>
  );
};

const CalendarDay: FC<CalendarDayProps> = ({ day, current, today, events }) => {
  return (
    <td
      className={`${current ? "text-black" : "text-gray-400"} ${
        today && "bg-blue-500"
      } border`}
    >
      <div className="flex w-full justify-center">{day}</div>
      <div className="h-20 overflow-scroll">
        {events.map(({ title }: CalendarEventProps, index: number) => (
          <CalendarEvent key={index} title={title} />
        ))}
      </div>
    </td>
  );
};

const CalendarWeek: FC<CalendarWeekProps> = ({ week, className }) => {
  return (
    <tr
      className={twMerge("grid h-full border-collapse grid-cols-7", className)}
    >
      {week.map((props: CalendarDayProps, index: number) => (
        <CalendarDay key={index} {...props} />
      ))}
    </tr>
  );
};

const CalendarDays: FC<CalendarDaysProps> = ({ days, className }) => {
  return (
    <tbody className={twMerge("flex h-full flex-col", className)}>
      {days.map((_: CalendarDayProps, index: number) => {
        if (index % 7) return null;
        const week = days.slice(index, index + 7);

        return <CalendarWeek key={index} week={week} />;
      })}
    </tbody>
  );
};

const Calendar: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={twMerge("h-full", className)} {...props} />;
};

export {
  CalendarToolbar,
  CalendarYearPrev,
  CalendarYearNext,
  CalendarMonthPrev,
  CalendarMonthNext,
  CalendarMonthYear,
  CalendarGrid,
  CalendarHeaders,
  CalendarDays,
  Calendar,
};
