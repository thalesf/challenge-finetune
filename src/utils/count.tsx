import { ListItem } from "../types/list";

export function filterByType(list: ListItem[], id: number) {
  return list
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [] as ListItem[])
    .filter((item:ListItem) => item.type === id).length;
}
