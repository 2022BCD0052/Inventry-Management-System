import Link from "next/link";
import React from "react";

const SubscriptionCard = () => {
  return (
    <div className="px-3 mt-6 p-4 ">
      <div className="bg-slate-900  border-gray-800 rounded-lg border  px-2 py-2 ">
        <div className="border-b pb-1">
          <p className="text-sm">
            Your Premium Plan Trial is ending soon.{" "}
            <span className="ml-1 text-red-500 text-xs hover:font-extrabold hover:underlined">
              Renew Now
            </span>
          </p>
        </div>

        <div>
          <div className="flex-wrap-2  flex text-sm items-center gap-2 ">
            <button className=" pr-3 line-clamp-1 border-r text-slate-50  p-1">
              Renew Now
            </button>
            <Link href="" className=" line-clamp-1 rounded">
              Cancel Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
