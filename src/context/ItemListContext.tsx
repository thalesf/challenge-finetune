import { createContext } from "use-context-selector";
import { useCallback, useState, useEffect } from "react";
import { ListItem } from "../types/list";
import { filterByDate } from "../utils/filter";
import { mockItemList } from "../mocks/listItem";

export interface ItemListData {
  listItem: ListItem[];
  filteredItems: ListItem[];
  selectedDate: string;
  addNewItem: (item: ListItem) => void;
  deleteItem: (id: number) => void;
  handleFilterByDate: (date: string) => void;
  handleSelectedDate: (date: Date) => void;
}

export const ItemListContext = createContext({} as ItemListData);

export const ItemListProvider: React.FC = ({ children }) => {
  const [listItem, setListItem] = useState<ListItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<ListItem[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
      setListItem(mockItemList)
  }, []);

  const addNewItem = useCallback((item: ListItem) => {
    setListItem((state) => [...state, item]);
  }, []);

  const deleteItem = useCallback(
    (item: number) => {
      const removeItem = listItem.filter((remove: ListItem) => {
        return remove.id !== item;
      });
      const removeFromFiltered = filteredItems.filter((remove: ListItem) => {
        return remove.id !== item;
      });
      setListItem(removeItem);
      setFilteredItems(removeFromFiltered);
    },
    [listItem, filteredItems]
  );

  const handleFilterByDate = useCallback(
    (date: string) => {
      const result = filterByDate(listItem, date);
      setFilteredItems(result);
    },
    [listItem]
  );

  const handleSelectedDate = useCallback((date: Date) => {
    setSelectedDate(date.toISOString());
  }, []);

  return (
    <ItemListContext.Provider
      value={{
        listItem,
        filteredItems,
        selectedDate,
        addNewItem,
        handleFilterByDate,
        handleSelectedDate,
        deleteItem,
      }}
    >
      {children}
    </ItemListContext.Provider>
  );
};
