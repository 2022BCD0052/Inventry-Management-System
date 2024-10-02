import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const FixedHeaders = ({newLink}) => {
  return (
    <div className="flex justify-between items-center py-3 bg-white px-4">
      <button className="text-2xl">All Items</button>
      <div className="flex gap-4">
        {/* new */}


        <Link  href={newLink} className="p-1 rounded bg-blue-600 flex  gap-2 px-4 items-center justify-between ">
          <Plus className="text-slate-50 w-4 h-4" />
          <span className="text-white">New</span>
        </Link>

        {/* layout */}
        <div className="flex  rounded-md overflow-hidden">
        <button className="bg-gray-300 p-2 border-r border-gray-400">
            <List className="w-4 h-4"/>
          </button>

          <button className="bg-gray-200 p-2">
            <LayoutGrid className="w-4 h-4"/>
          </button>
        </div>
        <div>
          <button className="bg-gray-300 rounded-md px-3 p-2">
            <MoreHorizontal />
          </button>
        </div>
        <div>
          <button className="bg-orange-600 p-2 text-white rounded-md ">
            <HelpCircle/>
          </button>
        </div>

        {/* more */}
        {/* help */}
      </div>
    </div>
  );
};

export default FixedHeaders;
