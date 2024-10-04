"use client";
import AddAdjacement from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferAdjustment from "@/components/dashboard/TransferInventoryForm";
import {  Minus, Plus } from "lucide-react";
import { useState } from 'react';
const tabs = [
  {
    title : "add Stock",
    icons :Plus,
    form :"add"
  },
  {
    title : "Transfer Stock",
    icons :Minus,
    form :"transfer"
  }
]

const NewAdjustment = () => {
  const [active,setActive ] = useState("add")
  return (
    <div>
      <FormHeader
        title={"New Adjustments"}
        href={"/inventory-dashboard/inventory"}
      />
      {/* form */}

      <div className="w-full  max-w-4xl mx-auto px-4 py-2 bg-white border border-b  my-3 rounded-lg shadow sm:p-3 md:p-3 dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      {
        tabs.map((tabs,i)=>{
         const Icon = tabs.icons; 
         return(
            <li className="mr-2" key={i}>
            <button
            onClick={()=>{
              setActive(tabs.form)
            }}
            
              href="#"
              className={`${active===tabs.form?"inline-flex items-center border-2 hover:border-blue-900 border-b-4 hover:text-blue-700 border-transparent justify-center p-4 tracking-widest text-blue-800 font-bold text-xl capitalize  border-blue-800 rounded-t-lg  dark:text-gray-500 dark:border-gray-500 group":"inline-flex items-center border-b-4 tracking-widest hover:text-blue-800 border-transparent justify-center p-4 text-gray-900 font-bold text-xl capitalize rounded-t-lg  dark:text-gray-500 dark:border-gray-500 group"}`}
              aria-current="page"
            >
          <Icon  className="w-5 h-5 mr-2 text-gray-950 font-bold dark:text-gray-900 group-hover:text-blue-900 "
          />
              {tabs.title}
            </button>
          </li>

          
          )
        })
      }
        </ul>
      </div>

      {
        active==="add"?<AddAdjacement/>:
   <TransferAdjustment />
      }

   
    </div>
  );
};

export default NewAdjustment;
