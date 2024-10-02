import React from "react";

const InventorySummeryCard = ({ item }) => {
  return (
    <div className="mb-4">
      <div className="rounded-lg border cursor-pointer border-slate-200 hover:border-blue-400 bg-white px-6 flex py-2  gap-3 items-center justify-between transition-all duration-300 shadow">
        <h2 className="uppercase text-sm text-slate-500">{item.title}</h2>
        <h4 className="font-semibold text-2xl ">{item.number}</h4>
      </div>
    </div>
  );
};

export default InventorySummeryCard;
