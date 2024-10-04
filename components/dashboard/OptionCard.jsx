import Link from "next/link";
import React from "react";

const OptionCard = ({ optionData }) => {
  const { title, description, link, linkTitle, enabled,icon:Icon } = optionData;
  return (
    <div>
      <div className="shadow flex flex-col gap-4 items-center bg-white rounded p-6">
        <h2 className="font-bold text-xl uppercase tracking-wider">{title}</h2>
        <div className="flex flex-col items-center">
          <Icon strokeWidth=".5px" className="w-32 h-32 text-slate-500" />
        </div>
        <p className="line-clamp-1">{description}</p>

        {enabled ? (
          <Link
            href={link}
            className="py-2 rounded-sm bg-blue-500 px-3 inline-flex items-center  space-x-2 text-white"
          >
            {linkTitle}
          </Link>
        ) : (
          <button className="py-2 rounded-sm bg-blue-500 px-3 inline-flex items-center space-x-2 text-white">
            {enabled}
          </button>
        )}
      </div>
    </div>
  );
};

export default OptionCard;
