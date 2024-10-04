import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

const ImageInput = ({label,imageUrl,setImageUrl}) => {
  return (
    <div className="col-span-full">
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
         {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="course image"
          width={1000}
          height={667}
          className="w-full h-64 object-cover"
        />
      ) : (
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].appUrl);
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
};

export default ImageInput;
