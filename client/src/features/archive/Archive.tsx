import React from "react";
import useFetchData from "../../hooks/useFetchData";
import DynamicHeader from "../../components/DynamicHeader";

export default function Archive() {
  const { mail } = useFetchData();
  return (
    <div className="w-[40%]">
      <DynamicHeader />
      <div className="h-[1000px] border border-r-0 p-4"></div>
    </div>
  );
}
