import { filterByDate } from "../filter";
import { isEqual } from "date-fns";
test("should return a list of elements by date", () => {
  const mockItemList = [
    {
      date: "2021-09-18T00:00:00.000Z",
      name: "Rice",
      amount: 200,
      type: 1,
      id: 1,
    },
    {
      date: "2021-09-10T00:00:00.000Z",
      name: "Beans",
      amount: 100,
      type: 2,
      id: 2,
    },
  ];

  const filteredDate = { date: "2021-09-18T00:00:00.000Z" };

  const result = filterByDate(mockItemList, "2021-09-18T00:00:00.000Z");
  expect(result[0]).toMatchObject(filteredDate)
});
