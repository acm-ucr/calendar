type props = {
  title: string;
  start: Date;
  end: Date;
};

const Event = ({ title, start, end }: props) => {
  return (
    <div className="flex items-center gap-1 px-4">
      <div className="mr-2 h-2 w-2 rounded-full bg-red-500" />
      <p className="">{title}</p>
    </div>
  );
};

export default Event;
