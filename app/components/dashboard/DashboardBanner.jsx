"use client"
import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

const DashboardBanner = () => {
    const [hidden ,setHidden] = useState(false)
  return (
    <div className= {`${hidden? "hidden" : "grid grid-cols-12 py-6 px-16 items-center bg-white relative"}`} >
      {/* icons */}
      <div className="col-span-2">
        <CreditCard className="w-16 h-16 text-slate-500" />
      </div>
      {/* text */}
      <div className="col-span-6">
        <h2 className="font-bold text-2xl">Start accepting online payments</h2>
        <p>
          With our simple and secure payment gateway, you can accept payments
          directly from your customers. No need to install a separate app or
          website.
        </p>
      </div>
      {/* button */}
      <div className="col-span-3 ">
        <button className="py-2.5 px-8  uppercase bg-blue-700 text-white rounded-lg">
          Enable
        </button>
      </div>

      {/* close button */}
      <button
      onClick={()=>setHidden(true)}
       className="py-2 px-8 uppercase absolute top-4 right-16">
<X/>
      </button>
    </div>
  );
};

export default DashboardBanner;
