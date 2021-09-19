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
  ];
  const filtered = filterByType(mockItemList, 1);
  expect(filtered).toEqual(mockItemList[1]);
});
