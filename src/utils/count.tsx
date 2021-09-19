import { ListItem } from "../types/list";

export function filterByType(list: ListItem, id: number) {
  return list
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .filter((item: ListItem) => item.type === 1);
}
