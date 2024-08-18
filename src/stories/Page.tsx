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

import { useCalendar } from "../hooks/useCalendar";

export const Page = () => {
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

  const { days, today } = useCalendar(events);

  return (
    <Calendar>
      <CalendarToolbar>
        <CalendarYearPrev>
          <ChevronsLeft />
        </CalendarYearPrev>
        <CalendarMonthPrev>
          <ChevronLeft />
        </CalendarMonthPrev>
        <CalendarMonthYear date={today} />
        <CalendarMonthNext>
          <ChevronRight />
        </CalendarMonthNext>
        <CalendarYearNext>
          <ChevronsRight />
        </CalendarYearNext>
      </CalendarToolbar>

      <CalendarGrid>
        <CalendarHeaders />
        <CalendarDays days={days} />
      </CalendarGrid>
    </Calendar>
  );
};
