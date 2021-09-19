import { createContext } from "use-context-selector";
import { useCallback, useState } from "react";
import { ListItem } from "../types/list";

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
    console.log('DELETE ITEM', item)
    const removeItem = listItem.filter((remove: ListItem) => {
      console.log('REMOVE', item, remove.id, remove.id === item)
      return remove.id !== item;
    });

    console.log('REMOVE ITEM', removeItem);
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
