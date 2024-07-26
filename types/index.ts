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
