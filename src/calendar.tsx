"use client";
import "../index.css";
import { twMerge } from "tailwind-merge";

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
      className={twMerge("w-full border-collapse border", className)}
      {...props}
    />
  );
};

const CalendarHeader = ({ day }: any) => {
  return <th className={twMerge("border text-center")}>{day}</th>;
};

const CalendarHeaders = () => {
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

const CalendarEvent = ({ title }: any) => {
  return (
    <div className="flex items-center gap-1 px-4">
      <div className="mr-2 h-2 w-2 rounded-full bg-red-500" />
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
      <div className="h-20 overflow-scroll">
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
      className={twMerge("grid h-full border-collapse grid-cols-7", className)}
    >
      {week.map((props: any, index: number) => (
        <CalendarDay key={index} {...props} />
      ))}
    </tr>
  );
};

const CalendarDays = ({ month, year, events, className }: any) => {
  const first = new Date(year, month, 1).getDay();
  const last = new Date(year, month + 1, 0).getDate();

  const lastPrevious = new Date(year, month, 0).getDate();

  const today = new Date();
  const currMonth = today.getMonth() === month;
  const currYear = today.getFullYear() === year;

  const curr = Array.from({ length: last }, (_, i) => ({
    day: i + 1,
    current: true,
    today: currMonth && currYear && today.getDate() === i + 1,
    events: events.filter((event: any) => {
      return (
        event.start >= new Date(year, month, i + 1) &&
        event.end <= new Date(year, month, i + 2)
      );
    }),
  }));

  const prefix: any = Array.from({ length: first }, (_, i) => ({
    day: lastPrevious - first + i + 1,
    current: false,
    today: false,
    events: [],
  }));

  const FL = first + last;

  const suffix: any = Array.from(
    { length: FL - (FL % 7) + 7 - FL },
    (_, i) => ({
      day: i + 1,
      current: false,
      today: false,
      events: [],
    }),
  );

  const days: any = prefix.concat(curr, suffix);

  console.log("RUH OH THE DAYS NOT WORKING LOL?", days);

  return (
    <tbody className={twMerge("flex h-full flex-col", className)}>
      {days.map((_: any, index: number) => {
        if (index % 7) return null;
        const week = days.slice(index, index + 7);

        return <CalendarWeek key={index} week={week} />;
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
