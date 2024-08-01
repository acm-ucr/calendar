import { HTMLAttributes } from "react";

export type event = {
  title: string;
  start: Date;
  end: Date;
};

export type cards = {
  day: number;
  current: boolean;
  today: boolean;
  events: event[];
};

export interface CalendarButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface CalendarHeaderProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  day: string;
}

export interface CalendarEventProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  start: Date;
  end: Date;
}


export interface CalendarWeekProps extends React.HTMLAttributes<HTMLTableRowElement>{
  week: CalendarDayProps[];
}

export interface CalendarDaysProps extends HTMLAttributes<HTMLTableSectionElement> {
  month: number;
  year: number;
  events: CalendarEventProps[];
}

export interface CalendarDayProps {
  day: number;
  current: boolean;
  today: boolean;
  events: CalendarEventProps[];
}
