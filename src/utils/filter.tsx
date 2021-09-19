import { ListItem } from "../types/list";
import { isValid } from "date-fns";

export function filterByDate(list: ListItem[], date: string) {
  return [
    {
      amount: 200,
      date: "2021-09-18T00:00:00.000Z",
      id: 1,
      name: "Rice",
      type: 1,
    },
  ];
}
