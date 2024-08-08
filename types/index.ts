export type event = {
  title: string;
  start?: Date;
  end?: Date;
};

export type cards = {
  day: number;
  current: boolean;
  today: boolean;
  events?: event[];
};

export type CalendarButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export type CalendarHeaderProps =
  React.ThHTMLAttributes<HTMLTableHeaderCellElement> & {
    day: string;
  };

export type CalendarEventProps = React.HTMLAttributes<HTMLDivElement> & event;

export type CalendarWeekProps = React.HTMLAttributes<HTMLTableRowElement> & {
  week: CalendarDayProps[];
};

export type CalendarDaysProps =
  React.HTMLAttributes<HTMLTableSectionElement> & {
    month: number;
    year: number;
    events: CalendarEventProps[];
  };

export type CalendarDayProps = React.HTMLAttributes<HTMLTableDataCellElement> &
  cards & {
    events: CalendarDayProps[];
  };
