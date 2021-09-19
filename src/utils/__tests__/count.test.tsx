import { filterByType } from "../count";

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
test("should return quantity of items by type", () => {
  const filtered = filterByType(mockItemList, 1);
  expect(filtered).toBe(1);
});

test("should return zero when invalid id is provided", () => {
  const filtered = filterByType(mockItemList, 9999);
  expect(filtered).toBe(0);
});
