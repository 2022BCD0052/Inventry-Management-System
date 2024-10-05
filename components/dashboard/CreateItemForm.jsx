"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInputs from "@/components/FormInputs/TextInputs";
import SelectInput from "@/components/FormInputs/SelectInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadButton } from "@/lib/uploadthing";
import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import ImageInput from "@/components/FormInputs/ImageInput";
import { makeApiRequest } from "@/lib/makePostRequest";
import { getData } from "@/lib/getData";

export default  function CreateItemForm({
  categories,
  units,
  brands,
  warehouses,
  suppliers,
}) {
  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log("Submitting data:", data);
    await makeApiRequest({
      setLoading,
      endpoint: "api/items",
      data,
      resourceName: "Supplier",
      reset,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid gap-6 sm:grid-cols-2  sm:gap-6 grid-cols-1">
        <TextInputs
          label="Item Tittle"
          name="title"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full col-span-1"
        />

        <SelectInput
          name="categoryId"
          label="Select the Item Category"
          register={register}
          errors={errors}
          options={categories}
          isRequired={true}
          className="w-full "
        />
        <TextInputs
          label="Item SKU"
          name="sku"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />
        <TextInputs
          label="Item Barcode"
          name="barcode"
          register={register}
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        <TextInputs
          label="Item Quantity"
          name="qty"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />

        <SelectInput
          name="unitId"
          label="Select the Item Unit"
          register={register}
          errors={errors}
          options={units}
          isRequired={true}
          className="w-full "
        />
        <SelectInput
          name="brandID"
          label="Select the Item Brand"
          register={register}
          errors={errors}
          options={brands}
          isRequired={true}
          className="w-full "
        />
        
        <TextInputs
          label="Buying Price"
          name="buyingPrice"
          register={register}
          type="number"
          errors={errors}
          className="w-full"
        />
        <TextInputs
          label="Selling Price"
          name="selingPrice"
          register={register}
          type="number"
          errors={errors}
          className="w-full"
        />

        <SelectInput
          name="supplierId"
          label="Select the Item Supplier"
          register={register}
          errors={errors}
          options={suppliers}
          className="w-full "
        />
        <TextInputs
          label="Re-Order Point"
          name="reOrderPoint"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="warehouseId"
          label="Select the Item Warehouse"
          register={register}
          errors={errors}
          options={warehouses}
          isRequired={true}
          className="w-full "
        />
        <TextInputs
          label="Item Weight in Kgs"
          name="weight"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInputs
          label="Item Dimensions in cm(20 X 30)"
          name="dimensions"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInputs
          label="Item Tax Rate in %"
          name="taxRate"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextAreaInput
          label="Item Description"
          name="description"
          register={register}
          errors={errors}
          className="w-full col-span-2"
        />
        <TextAreaInput
          label="Item Notes"
          name="notes"
          register={register}
          errors={errors}
          className="w-full col-span-2"
        />

        {/* Upload thing */}
        <div className="col-span-2">
         <UploadDropzone
          endpoint="imageUploader"  // Your API endpoint for uploading images
          onClientUploadComplete={(res) => {
            // Set imageUrl to the correct URL from the response
            setImageUrl(res[0].url);
            console.log("Files: ", res[0].url);
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            // Handle upload error
            alert(`ERROR! ${error.message}`);
          }}
        />
    </div>

        {/* <ImageInput
          label="Item Data"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        /> */}
      </div>

      <SubmitButton isLoading={loading} title=" item" type="submit" />
    </form>
  );
}
