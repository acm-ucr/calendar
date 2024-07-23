import Header from "./Header";

const Headers = () => {
  const headers = [
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
        {headers.map((day) => (
          <Header key={day} day={day} />
        ))}
      </tr>
    </thead>
  );
};

export default Headers;
