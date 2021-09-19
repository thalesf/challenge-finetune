import React from "react";
import { Pie } from "react-chartjs-2";
import { useList } from "../../hooks/useList";
import { ItemType } from "../../types/list";
import { filterByType } from "../../utils/count";

export default function Chart() {
  const { listItem } = useList();

  console.log("LIST ITEM", listItem);
  return (
    <div>
      <Pie
        style={{ width: 200, height: 200 }}
        data={{
          labels: ["Protein", "Fat", "Carbohydrates"],

          datasets: [
            {
              label: "My First Dataset",
              data: [
                filterByType(listItem, ItemType.Protein),
                filterByType(listItem, ItemType.Fat),
                filterByType(listItem, ItemType.Carbohydrate),
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
