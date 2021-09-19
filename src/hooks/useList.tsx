import { useContextSelector } from "use-context-selector";
import { ItemListContext } from "../context/ItemListContext";

export function useList() {
  const listItem = useContextSelector(ItemListContext, (item) => item.listItem);
  const addNewItem = useContextSelector(
    ItemListContext,
    (item) => item.addNewItem
  );

  const filteredItems = useContextSelector(
    ItemListContext,
    (item) => item.filteredItems,
  );

  const selectedDate = useContextSelector(
    ItemListContext,
    (item) => item.selectedDate,
  );

  const deleteItem = useContextSelector(
    ItemListContext,
    (item) => item.deleteItem
  );
  const handleFilterByDate = useContextSelector(
    ItemListContext,
    (item) => item.handleFilterByDate
  );

  const handleSelectedDate = useContextSelector(
    ItemListContext,
    (item) => item.handleSelectedDate
  );
  

  return {
    listItem,
    filteredItems,
    selectedDate,
    addNewItem,
    handleSelectedDate,
    deleteItem,
    handleFilterByDate,
  };
}
