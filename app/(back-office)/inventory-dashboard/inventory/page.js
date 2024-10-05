import OptionCard from "@/components/dashboard/OptionCard";
import FixedHeaders from "@/components/dashboard/FixedHeaders";
import {
  Boxes,
  ChartNoAxesGantt,
  Component,
  Factory,
  LayoutGrid,
  LayoutPanelTop,
  Scale,
  ScrollText,
  Shirt,
  SwatchBook,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const optionCards = [
  {
    title: "Items ",
    description: "Create multiple variants of the same item using Item Groups",
    link: "/inventory-dashboard/inventory/items/new",
    linkTitle: "New Item ",
    enabled: true,
    icon: LayoutGrid,
  },
  {
    title: "Categories ",
    description: "Bundle different items together and sell them as kits",
    link: "/inventory-dashboard/inventory/catogeries/new",
    linkTitle: "New Categories ",
    enabled: true,
    icon: LayoutPanelTop,
  },
  {
    title: "Brands",
    description: "Create standalone items and services that you buy and sell",
    link: "/inventory-dashboard/inventory/brands/new",
    linkTitle: "New Brands",
    enabled: true,
    icon: Component,
  },
  {
    title: "Warehouse",
    description: "Tweak your item prices for specific contacts or transactions",
    link: "/inventory-dashboard/inventory/warehouse/new",
    linkTitle: "New WareHouse",
    enabled: true,
    icon: Warehouse,
  },
  {
    title: "Units",
    description: "Tweak your item prices for specific contacts or transactions",
    link: "/inventory-dashboard/inventory/units/new",
    linkTitle: "New nits ",
    enabled: true,
    icon: Scale,
  },
  {
    title: "Adjustments",
    description:
      "Transfer Stock from the main WareHouse to the specified amount of items",
    link: "/inventory-dashboard/inventory/adjustments/new",
    linkTitle: "New nits ",
    enabled: true,
    icon: SwatchBook,
  },
  {
    title: "Suppliers",
    description:
      "Transfer Stock from the main WareHouse to the specified amount of items",
    link: "/inventory-dashboard/inventory/adjustments/new",
    linkTitle: "New Supplier ",
    enabled: true,
    icon: Factory
  },
];

const Inventory = (optionData) => {
  const { title, description, link, linkTitle, enabled, icon } = optionData;

  return (
    <div className="bg-[#ececec] min-h-screen">
      <FixedHeaders newLink="/inventory-dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 m-4 px-16 py-8 gap-6  ">
        {optionCards.map((card, i) => {
          return <OptionCard optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Inventory;
