import { useMemo, useState } from "react";
import { CalendarEventProps, CalendarDayProps } from "../../types/index";

export const useCalendar = (events: CalendarEventProps[]) => {
  const [today, setToday] = useState(new Date());

  const year = today.getFullYear();
  const month = today.getMonth();

  const days = useMemo(() => {
    const first = new Date(year, month, 1).getDay();
    const last = new Date(year, month + 1, 0).getDate();
    const lastPrevious = new Date(year, month, 0).getDate();

    const currMonth = today.getMonth() === new Date().getMonth();
    const currYear = today.getFullYear() === new Date().getFullYear();

    const curr = Array.from({ length: last }, (_, i) => ({
      day: i + 1,
      current: true,
      today: currMonth && currYear && today.getDate() === i + 1,
      events: events.filter((event: CalendarEventProps) => {
        return (
          event.start! >= new Date(year, month, i + 1) &&
          event.end! <= new Date(year, month, i + 2)
        );
      }),
    })) as CalendarDayProps[];

    const prefix: CalendarDayProps[] = Array.from(
      { length: first },
      (_, i) => ({
        day: lastPrevious - first + i + 1,
        current: false,
        today: false,
        events: [],
      }),
    );

    const FL = first + last;

    const suffix: CalendarDayProps[] = Array.from(
      { length: FL - (FL % 7) + 7 - FL },
      (_, i) => ({
        day: i + 1,
        current: false,
        today: false,
        events: [],
      }),
    );

    return prefix.concat(curr, suffix);
  }, [month, year, events]);

  const onPrevMonth = () => {
    setToday(new Date(year, month - 1, today.getDate()));
  };

  const onPrevYear = () => {
    setToday(new Date(year - 1, month, today.getDate()));
  };

  const onNextMonth = () => {
    setToday(new Date(year, month + 1, today.getDate()));
  };

  const onNextYear = () => {
    setToday(new Date(year - +1, month, today.getDate()));
  };

  return {
    days,
    month,
    year,
    date: today,
    onPrevMonth,
    onPrevYear,
    onNextMonth,
    onNextYear,
  };
};
