import Day from "./Day";

const Days = ({ year, month, events }) => {
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

  const prefix = Array.from({ length: first }, (_, i) => ({
    day: lastPrevious - first + i + 1,
    current: false,
    today: false,
    events: [],
  }));

  const FL = first + last;

  const suffix = Array.from({ length: FL - (FL % 7) + 7 - FL }, (_, i) => ({
    day: i + 1,
    current: false,
    today: false,
    events: [],
  }));

  const cards = prefix.concat(days, suffix);

  return (
    <tbody className="flex flex-col h-full">
      {cards.map(({ day }, index) => {
        if (index % 7) return null;

        const week = cards.slice(index, index + 7);

        return (
          <tr key={day} className="grid grid-cols-7 border-collapse h-full">
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
