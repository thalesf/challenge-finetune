import { renderHook, act } from "@testing-library/react-hooks";
import { useList } from "../useList";
import { ItemListProvider } from "../../context/ItemListContext";
import { mockItemList } from "../../mocks/listItem";
import { cleanup } from "@testing-library/react";
import { ListItem } from "../../types/list";

// //Type 1 = Protein
// //Type 2 = Fat
// //Type 3 = Carbohydrate

afterEach(cleanup);

test("should add a new element to list", () => {
  const wrapper = ({ children }) => (
    <ItemListProvider>{children}</ItemListProvider>
  );
  const { result } = renderHook(() => useList(), { wrapper });

  const newItem:ListItem = {
    date: "2021-09-18T22:58:23.383Z",
    name: "Potato",
    amount: 100,
    type: 1,
    id: 2,
  };

  act(() => {
    result.current.addNewItem(newItem);
  });

  expect(result.current.listItem).toEqual([newItem]);
});

test("should delete element by id", () => {
  const wrapper = ({ children }) => (
    <ItemListProvider>{children}</ItemListProvider>
  );
  
  const { result} = renderHook(() => useList(), { wrapper });

  act(() => {
    result.current.addNewItem(mockItemList[0]);
    result.current.addNewItem(mockItemList[1]);
  });

  act(() => {
    result.current.deleteItem(1);
  })

  expect(result.current.listItem).toEqual([mockItemList[1]]);
});