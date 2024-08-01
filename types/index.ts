export type Event = {
  title: string;
  start: Date;
  end: Date;
};

export type Cards = {
  day: number;
  current: boolean;
  today: boolean;
  events: Event[];
};
