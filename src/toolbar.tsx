import {
  ChevronRight,
  ChevronsRight,
  ChevronLeft,
  ChevronsLeft,
} from "lucide-react";

type props = {
  date: Date;
  onMonthChange: (value: number) => void;
  onYearChange: (value: number) => void;
};

const Toolbar = ({ date, onMonthChange, onYearChange }: props) => {
  return (
    <div className="flex gap-4 justify-center">
      <ChevronsLeft className="text-3xl" onClick={() => onYearChange(-1)} />
      <ChevronLeft className="text-3xl" onClick={() => onMonthChange(-1)} />
      {date.toLocaleString("default", { month: "long" })}
      {date.getFullYear()}
      <ChevronRight className="text-3xl" onClick={() => onMonthChange(1)} />
      <ChevronsRight className="text-3xl" onClick={() => onYearChange(1)} />
    </div>
  );
};

export default Toolbar;
