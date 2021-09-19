import { useContextSelector } from 'use-context-selector'
import { ItemListContext } from '../context/ItemListContext'

export function useList() {
  const listItem = useContextSelector(ItemListContext, item => item.listItem);
  const addNewItem = useContextSelector(ItemListContext, item => item.addNewItem);
  const deleteItem = useContextSelector(ItemListContext, item => item.deleteItem);

  return {
    listItem,
    addNewItem,
    deleteItem
  }
}