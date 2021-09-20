import { renderHook, act } from "@testing-library/react-hooks";
import { useList } from "../useList";
import { ItemListProvider } from "../../context/ItemListContext";

// //Type 1 = Protein
// //Type 2 = Fat
// //Type 3 = Carbohydrate

export const mockItemList = [
  {
    date: "2021-09-18T22:58:23.383Z",
    name: "Rice",
    amount: 200,
    type: 1,
    id: 1,
  },
  {
    date: "2021-09-18T22:58:23.383Z",
    name: "Beans",
    amount: 100,
    type: 1,
    id: 2,
  },
];

test("should add a new element to list", () => {
  const wrapper = ({ children }) => (
    <ItemListProvider>{children}</ItemListProvider>
  );
  const { result } = renderHook(() => useList(), { wrapper });

  const newItem = mockItemList[0];

  act(() => {
    result.current.addNewItem(newItem);
  });

  expect(result.current.listItem).toEqual(expect.arrayContaining([
    expect.objectContaining(newItem)
  ]))
});

test("should delete element by id", () => {
  const wrapper = ({ children }) => (
    <ItemListProvider>{children}</ItemListProvider>
  );

  const { result } = renderHook(() => useList(), { wrapper });

  act(() => {
    result.current.addNewItem(mockItemList[0]);
    result.current.addNewItem(mockItemList[1]);
  });

  act(() => {
    result.current.deleteItem(1);
  });

  expect(result.current.listItem).not.toEqual(expect.arrayContaining([
    expect.not.objectContaining(mockItemList[0])
  ]))
});
