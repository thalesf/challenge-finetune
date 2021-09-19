import { filterByType } from "../count";

test("should return quantity of items by type", () => {
  const mockItemList = [
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
      type: 2,
      id: 2,
    },
    {
      date: "2021-09-18T22:58:23.383Z",
      name: "Beans",
      amount: 100,
      type: 2,
      id: 3,
    },
  ];
  const filtered = filterByType(mockItemList, 1);
  expect(filtered).toBe(1)
});

test("should return an empty array when list item is not valid", () => {
  const mockItemList = [{ id: 2, another_data: 123 }];
  const filtered = filterByType(mockItemList, 1);
  expect(filtered).toEqual([]);
});
