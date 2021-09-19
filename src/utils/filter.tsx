import { ListItem } from "../types/list";
import { getYear, getMonth, getDate, isEqual } from "date-fns";

export function filterByDate(list: ListItem[], date: string) {
  const filteredData = new Date(date);
  // const
  return list.filter((item: ListItem) => {
    console.log("NEW DATE", item.date, filteredData);
    console.log("FILTEREED", getYear(new Date(item.date)));
    return (
      new Date(
        getYear(new Date(item.date)),
        getMonth(new Date(item.date)),
        getDate(new Date(item.date))
      ),
      new Date(
        getYear(new Date(filteredData)),
        getMonth(new Date(filteredData)),
        getDate(new Date(filteredData))
      )
    );
  });
}
