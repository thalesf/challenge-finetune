import React from "react";
import { ItemListProvider } from "../context/ItemListContext";
import Table from "../components/table";
import Chart from "../components/graph";
import Header from "../components/header";
import HeaderDate from "../components/header/date";
import Calendar from "../components/calendar";
import Modal from "../components/modal";
import * as S from "./styles";

export default function Home() {
  return (
    <ItemListProvider>
      <Header />
      <S.Container>
        <Chart />
        <HeaderDate />
      </S.Container>
      <Calendar />
      <Table />
      <Modal />
    </ItemListProvider>
  );
}
