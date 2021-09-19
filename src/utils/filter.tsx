import { ListItem } from "../types/list";
import { getYear, getMonth, getDate, isEqual } from "date-fns";

export function filterByDate(list: ListItem[], date: string) {
  const filteredData = new Date(date);
  return list.filter((item: ListItem) => {
    return isEqual(
      new Date(
        getYear(new Date(item.date)),
        getMonth(new Date(item.date)) + 1,
        getDate(new Date(item.date))
      ),
      new Date(
        getYear(new Date(filteredData)),
        getMonth(new Date(filteredData)) + 1,
        getDate(new Date(filteredData))
      )
    );
  });
}
