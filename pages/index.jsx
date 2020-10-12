import Slider from "../components/Slider";
import React from "react";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <Slider />
    </MainLayout>
  );
}
