import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesAcctivityCard from "./SalesAcctivityCard";
import InventorySummeryCard from "./InventorySummeryCard";

const salesActivity = [
  {
    title: "To be Packed",
    number: 10,
    unit: "Qty",
    href: "#",
    color: "text-red-600",
  },
  {
    title: "To be Shiped",
    number: 10,
    unit: "Pkgs",
    href: "#",
    color: "text-blue-600",
  },
  {
    title: "To be Delivered",
    number: 10,
    unit: "Pkgs",
    href: "#",
    color: "text-green-600",
  },
  {
    title: "To be Invoiced",
    number: 10,
    unit: "Pkgs",
    href: "#",
    color: "text-purple-600",
  },
];

const inventorySummery = [
  {
    title: "quantity in hand",
    number: 100,
  },
  {
    title: "quantity to be received",
    number: 10,
  },
];
const SalesOverview = () => {
  return (
    <div className="bg-blue-50 border-b border-slate-400  gap-4  grid grid-cols-12">
      {/* sales activity */}
      <div className=" col-span-9 border-r border-slate-300 p-8">
        <h2 className="mb-6 text-xl ">Sales Activity</h2>
        <div className="pr-8  grid grid-cols-4 gap-4">
          {/* card */}
          {salesActivity.map((item, index) => (
            <SalesAcctivityCard item={item} />
          ))}
        </div>
      </div>

      <div className="col-span-3 px-4 p-8">
        <h2 className="mb-6 text-xl ">Inventory Summery</h2>
        {inventorySummery.map((item, index) => {
          return <InventorySummeryCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SalesOverview;
