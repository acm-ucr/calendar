import { event, cards } from "../types";
import Day from "./day";

type props = {
  year: number;
  month: number;
  events: event[];
};

const Days = ({ year, month, events }: props) => {
  const first = new Date(year, month, 1).getDay();
  const last = new Date(year, month + 1, 0).getDate();

  const lastPrevious = new Date(year, month, 0).getDate();

  const today = new Date();
  const currMonth = today.getMonth() === month;
  const currYear = today.getFullYear() === year;

  const days = Array.from({ length: last }, (_, i) => ({
    day: i + 1,
    current: true,
    today: currMonth && currYear && today.getDate() === i + 1,
    events: events.filter((event) => {
      return (
        event.start >= new Date(year, month, i + 1) &&
        event.end <= new Date(year, month, i + 2)
      );
    }),
  }));

  const prefix: cards[] = Array.from({ length: first }, (_, i) => ({
    day: lastPrevious - first + i + 1,
    current: false,
    today: false,
    events: [],
  }));

  const FL = first + last;

  const suffix: cards[] = Array.from(
    { length: FL - (FL % 7) + 7 - FL },
    (_, i) => ({
      day: i + 1,
      current: false,
      today: false,
      events: [],
    }),
  );

  const cards: cards[] = prefix.concat(days, suffix);

  return (
    <tbody className="flex h-full flex-col">
      {cards.map(({ day }, index) => {
        if (index % 7) return null;

        const week = cards.slice(index, index + 7);

        return (
          <tr key={day} className="grid h-full border-collapse grid-cols-7">
            {week.map(({ day, current, today, events }) => (
              <Day
                key={day}
                day={day}
                current={current}
                today={today}
                events={events}
              />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Days;
