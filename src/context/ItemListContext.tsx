import { createContext } from "use-context-selector";
import { useCallback, useState } from "react";
import { ListItem, ListItemResponse } from "../types/list";

export interface ItemListData {
  listItem: ListItem[];
  addNewItem: (item: ListItem) => void;
  deleteItem: (id: number) => void;
}

export const ItemListContext = createContext({} as ItemListData);

export const ItemListProvider: React.FC = ({ children }) => {
  const [listItem, setListItem] = useState<ListItem[]>([]);

  const addNewItem = useCallback((item: ListItem) => {
    setListItem((state) => [...state, item]);
  }, []);

  const deleteItem = useCallback((item: number) => {
    const removeItem = listItem.filter((remove: any) => {
      return remove.id !== item;
    });
    setListItem(removeItem);
  }, [listItem]);

  return (
    <ItemListContext.Provider
      value={{
        listItem,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </ItemListContext.Provider>
  );
};
