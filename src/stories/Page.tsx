import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import {
  Calendar,
  CalendarDays,
  CalendarGrid,
  CalendarHeaders,
  CalendarMonthNext,
  CalendarMonthPrev,
  CalendarMonthYear,
  CalendarToolbar,
  CalendarYearNext,
  CalendarYearPrev,
} from "../calendar";
import { useState } from "react";

export const Page = () => {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

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
    <Calendar>
      <CalendarToolbar>
        <CalendarYearPrev>
          <ChevronsLeft />
        </CalendarYearPrev>
        <CalendarMonthPrev>
          <ChevronLeft />
        </CalendarMonthPrev>
        <CalendarMonthYear>{date.toDateString()}</CalendarMonthYear>
        <CalendarMonthNext>
          <ChevronRight />
        </CalendarMonthNext>
        <CalendarYearNext>
          <ChevronsRight />
        </CalendarYearNext>
      </CalendarToolbar>

      <CalendarGrid>
        <CalendarHeaders />
        <CalendarDays month={month} year={year} events={events} />
      </CalendarGrid>
    </Calendar>
  );
};
