const Event = ({ title, start, end }) => {
  return (
    <div className="px-4 flex items-center gap-1">
      <div className="w-2 h-2 mr-2 bg-red-500 rounded-full" />
      <p className="">{title}</p>
    </div>
  );
};

export default Event;
