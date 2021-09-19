import React from "react";
import { Pie } from "react-chartjs-2";
import { useList } from "../../hooks/useList";
import { ItemType } from "../../types/list";
import { filterByType } from "../../utils/count";

export default function Chart() {
  const { selectedDate, filteredItems, listItem } = useList();
 
  return (
    <div>
      <Pie
        style={{ width: 200, height: 200 }}
        data={{
          labels: ["Protein", "Fat", "Carbohydrates"],

          datasets: [
            {
              data: [
                selectedDate
                  ? filterByType(filteredItems, ItemType.Protein)
                  : filterByType(listItem, ItemType.Protein),
                selectedDate
                  ? filterByType(filteredItems, ItemType.Fat)
                  : filterByType(listItem, ItemType.Fat),
                selectedDate
                  ? filterByType(filteredItems, ItemType.Carbohydrate)
                  : filterByType(listItem, ItemType.Carbohydrate),
              ],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
