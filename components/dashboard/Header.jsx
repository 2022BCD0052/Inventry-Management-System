import {
  Bell,
  ChevronDown,
  ChevronDownCircleIcon,
  History,
  HistoryIcon,
  Layout,
  LayoutGrid,
  Plus,
  Settings,
  User2,
  Users,
} from "lucide-react";
import React from "react";
import Searchinput from "./Searchinput";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-slate-50 h-14 flex items-center justify-between shadow-sm px-8">
      <div className="flex gap-3">
        {/* recent activity */}
        <button>
          <History />
        </button>
        <Searchinput />
      </div>

      <div className="flex gap-3 items-center">
        {/* plus icon */}
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 rounded-lg bg-blue-600">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        {/*   profile picture */}
        <div className="flex gap-3 border-r  justify-between items-center pr-1 ">
          <button className=" rounded-lg  ">
            <Users className="text-slate-700 w-4 h-4" />
          </button>
          <button className=" rounded-lg ">
            <Settings className="text-slate-700 w-4 h-4" />
          </button>
          <button className="rounded-lg ">
            <Bell className="text-slate-700 w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-6 ">
          <button className="flex items-center">
            <span>Gujrat</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button>
            {/* <Image
              alt="image"
              src={"/"}
              className="rounded-full border w-9 h-9 border-gray-300  "
              width={96}
              height={96}
            /> */}
          </button>
          <button>
            <LayoutGrid className="w-6 h-6  border-slate-6 border " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
