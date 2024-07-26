"use client";
import { useState } from "react";
import Days from "./days";
import Toolbar from "./toolbar";
import Headers from "./headers";
import "../index.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const onMonthChange = (value: number) => {
    setDate(new Date(year, month + value, day));
  };

  const onYearChange = (value: number) => {
    setDate(new Date(year + value, month, day));
  };

  const events = [
    {
      start: new Date(2024, 5, 1, 12, 30),
      end: new Date(2024, 5, 1, 1, 30),
      title: "NICE",
    },
    {
      start: new Date(2024, 5, 1, 1, 30),
      end: new Date(2024, 5, 1, 2, 30),
      title: "Another Event",
    },
    {
      start: new Date(2024, 5, 1, 1, 30),
      end: new Date(2024, 5, 1, 1, 30),
      title: "Poggers",
    },
    {
      start: new Date(2024, 5, 1, 1, 30),
      end: new Date(2024, 5, 1, 2, 30),
      title: "Another Event",
    },
    {
      start: new Date(2024, 5, 1, 1, 30),
      end: new Date(2024, 5, 1, 1, 30),
      title: "Poggers",
    },
    {
      start: new Date(2024, 5, 2, 1, 30),
      end: new Date(2024, 5, 2, 1, 30),
      title: "woohoo",
    },
  ];

  return (
    <div className="h-full">
      <Toolbar
        date={date}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
      <table className="border-collapse border w-full">
        <Headers />
        <Days year={year} month={month} events={events} />
      </table>
    </div>
  );
};

export default Calendar;
