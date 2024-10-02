import { BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-56 min-h-screen bg-slate-800 text-slate-50 justify-between">
        {/* top part */}
        {/* logo */}
        <Link href={""} className="flex gap-3 bg-slate-900 p-3 space-x-2">
          <ShoppingCart />
          <span className="ml-2 text-xl font-semibold">Inventory</span>
        </Link>
        {/* link */}
        {/* .................................................. */}

        <div className="flex  flex-col justify-between">
          <nav className="flex flex-col  gap-8 px-3 py-6">
            <div className="flex flex-col  gap-4">
                <Link href={"/"} className="flex items-center space-x-2 bg-blue-600 text-slate-50 py-2.5 px-2 rounded-md">
              <Home />
              <span>Home</span>
            </Link>

            <button href={""} className="flex items-center space-x-2">
              <Home />
              <span>Inventory</span>
            </button>
            </div>
            <div className="flex flex-col  gap-4">
            <button href={""} className="flex items-center space-x-2">
              < ShoppingBasket  />
              <span>Sales</span>
            </button> 

            <button href={""} className="flex items-center space-x-2">
              <ShoppingBag   />
              <span>Purchaces  </span>
            </button>
            </div>

            <div className="flex flex-col  gap-8">
            <Link href={"/"} className="flex items-center space-x-2">
              <Cable />
              <span>Integration</span>
            </Link>

            <Link href={"/"} className="flex items-center space-x-2">
              <BarChart4 />
              <span>Reports</span>
            </Link>
            <Link href={"/"} className="flex items-center space-x-2">
              <Files />
              <span>Documents</span>
            </Link>

              
            </div>
            
          </nav>
        </div>
        <SubscriptionCard/>

        {/* bottom */}
        {/* subscription */}
        {/* footer */}
        <div className="flex
     items-center justify-center bg-slate-900 ">
        <button className="flex space-x-2 items-center justify-center py-3 px-2">
                        <ChevronLeft className="w-5 h-5" />

        </button>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
