import { useMemo } from 'react';
import { Event, Cards} from '../../types/index';


export const useCalendar = (month: number, year: number, events: Event[]): { days: Cards[] } => {
  const first = useMemo(() => new Date(year, month, 1).getDay(), [month, year]);
  const last = useMemo(() => new Date(year, month + 1, 0).getDate(), [month, year]);
  const lastPrevious = useMemo(() => new Date(year, month, 0).getDate(), [month, year]);

  const today = new Date();
  const currMonth = today.getMonth() === month;
  const currYear = today.getFullYear() === year;

  const curr = useMemo<Cards[]>(
    () =>
      Array.from({ length: last }, (_, i) => ({
        day: i + 1,
        current: true,
        today: currMonth && currYear && today.getDate() === i + 1,
        events: events.filter((event: Event) => {
          const eventStart = new Date(event.start);
          const eventEnd = new Date(event.end);
          return (
            eventStart >= new Date(year, month, i + 1) &&
            eventEnd < new Date(year, month, i + 2)
          );
        }),
      })),
    [last, month, year, events, currMonth, currYear, today]
  );

  const prefix = useMemo<Cards[]>(
    () =>
      Array.from({ length: first }, (_, i) => ({
        day: lastPrevious - first + i + 1,
        current: false,
        today: false,
        events: [],
      })),
    [first, lastPrevious]
  );

  const FL = first + last;

  const suffix = useMemo<Cards[]>(
    () =>
      Array.from({ length: FL - (FL % 7) + 7 - FL }, (_, i) => ({
        day: i + 1,
        current: false,
        today: false,
        events: [],
      })),
    [FL]
  );

  const days = useMemo<Cards[]>(() => prefix.concat(curr, suffix), [prefix, curr, suffix]);

  return { days };
};


