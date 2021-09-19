import React from "react";
import { useList } from "../../hooks/useList";

const HeaderDate: React.FC = () => {
  const { selectedDate } = useList();

  return (
    <div>
      <h2>{selectedDate}</h2>
    </div>
  );
};

export default HeaderDate;
