import Event from "./Event";

const Day = ({ day, current, today, events }) => {
  return (
    <td
      className={`${current ? "text-white" : "text-gray-400"} ${
        today && "bg-blue-500"
      } border`}
    >
      <div className="flex w-full justify-center">{day}</div>
      <div className=" h-20 overflow-scroll">
        {events.map(({ title, start, end }, index) => (
          <Event key={index} title={title} start={start} end={end} />
        ))}
      </div>
    </td>
  );
};

export default Day;
