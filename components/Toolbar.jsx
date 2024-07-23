import {
  ChevronRight,
  ChevronsRight,
  ChevronLeft,
  ChevronsLeft,
} from "lucide-react";

const Toolbar = ({ date, onMonthChange, onYearChange }) => {
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
