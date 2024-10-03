import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const FormHeader = ({ title, href }) => {
  return (
    <div>
      {/*header  */}
      <div className="flex items-center justify-between px-8 py-4 bg-white">
        <h2>{title}</h2>
        <Link href={href}>
          <X />
        </Link>
      </div>

    
    </div>
  );
};

export default FormHeader;
