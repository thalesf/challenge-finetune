import React from "react";
import { useList } from "../../hooks/useList";
import { format } from "date-fns";
const HeaderDate: React.FC = () => {
  const { selectedDate } = useList();

  return (
    <div>
      <h2>{format(new Date(selectedDate), "YYYY/mm/dd")}</h2>
    </div>
  );
};

export default HeaderDate;
