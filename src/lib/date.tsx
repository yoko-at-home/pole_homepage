import { format, parseISO } from "date-fns";

export const DateComponent = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyy LLL ii k:mm")}</time>;
};
