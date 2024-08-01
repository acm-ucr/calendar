"use client";
import "../index.css";
import { twMerge } from "tailwind-merge";
import { useCalendar } from './hooks/useCalendar';

const CalendarToolbar = ({ className, ...props }: any) => {
  return (
    <div
      className={twMerge("flex items-center justify-center gap-4", className)}
      {...props}
    />
  );
};

const CalendarYearPrev = ({ onClick, ...props }: any) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarYearNext = ({ onClick, ...props }: any) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarMonthPrev = ({ onClick, ...props }: any) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarMonthNext = ({ onClick, ...props }: any) => {
  return <div onClick={onClick} {...props} />;
};

const CalendarMonthYear = ({ ...props }) => {
  return <div {...props} />;
};

const CalendarGrid = ({ className, ...props }: any) => {
  console.log("hello world");

  return (
    <table
      className={twMerge("border-collapse border w-full", className)}
      {...props}
    />
  );
};

const CalendarHeader = ({ day }: any) => {
  return <th className={twMerge("text-center border")}>{day}</th>;
};

const CalendarHeaders = ({ children }: any) => {
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
        {daysOfWeek.map((day) => (
          <CalendarHeader day={day} />
        ))}
      </tr>
    </thead>
  );
};

const CalendarEvent = ({ title, start, end }: any) => {
  return (
    <div className="px-4 flex items-center gap-1">
      <div className="w-2 h-2 mr-2 bg-red-500 rounded-full" />
      <p>{title}</p>
    </div>
  );
};

const CalendarDay = ({ day, current, today, events }: any) => {
  return (
    <td
      className={`${current ? "text-black" : "text-gray-400"} ${
        today && "bg-blue-500"
      } border`}
    >
      <div className="flex w-full justify-center">{day}</div>
      <div className=" h-20 overflow-scroll">
        {events.map(({ title, start, end }: any, index: any) => (
          <CalendarEvent key={index} title={title} start={start} end={end} />
        ))}
      </div>
    </td>
  );
};

const CalendarWeek = ({ week, className }: any) => {
  return (
    <tr
      className={twMerge("grid grid-cols-7 border-collapse h-full", className)}
    >
      {week.map((props: any) => (
        <CalendarDay {...props} />
      ))}
    </tr>
  );
};

const CalendarDays = ({ month, year, events, className }: any) => {
  const { days } = useCalendar(month, year, events);

  return (
    <tbody className={twMerge("flex flex-col h-full", className)}>
      {days.map((_: any, index: number) => {
        if (index % 7) return null;
        const week = days.slice(index, index + 7);

        return <CalendarWeek week={week} />;
      })}
    </tbody>
  );
};

const Calendar = ({ className, ...props }: any) => {
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
