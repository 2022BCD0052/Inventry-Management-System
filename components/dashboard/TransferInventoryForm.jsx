"use client";
import TextInputs from "@/components/FormInputs/TextInputs";
import SelectInput from "@/components/FormInputs/SelectInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeApiRequest } from "@/lib/makePostRequest";

const selectsBranch = [
  {
    value: "Main",
    label: "Main",
  },
  {
    value: "Branch",
    label: "Branch",
  },
];

const items = [
  {
    label: "Item A",
    value: "Item",
  },  {
    label: "Item b",
    value: "Item",
  },  {
    label: "Item c",
    value: "Item",
  },  {
    label: "Item d",
    value: "Item",
  },  {
    label: "Item e",
    value: "Item",
  },

 
];
const TransferAdjustment = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
async function onSubmit(data) {
  console.log("Submitting data:", data);
  await makeApiRequest({
    setLoading,
    endpoint: "/api/adjustments/transfer", 
    data, 
    resourceName: "Supplier", 
    reset
  });
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid gap-6 md:grid-cols-2  sm:gap-6 grid-cols-2">
      <TextInputs
          type="number"
          label="Enter Reference Number"
          name="referenceNumber"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />
         <SelectInput
          name="itemId"
          register={register}
          label="Select the Item"
          options={items}
          className="w-full col-span-1"
        />
        
        <TextInputs
          type="number"
          label="Enter  Amount of Stock Transfer"
          name="transferStockQty"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />
         <SelectInput
          name="givingWarehouseId"
          register={register}
          label="Select the WareHouse that will give the Stock "
          options={selectsBranch}
          className="w-full col-span-1"
        />
        <SelectInput
          name="receivingWarehouseId"
          register={register}
          label="Select the WareHouse that will receive the Stock "
          options={selectsBranch}
          className="w-full col-span-1"
        />

      </div>

      <TextAreaInput
        label=" WareHouse Notes"
        name="notes"
        register={register}
        errors={errors}
        isRequired={true}
        className="w-full"
      />

      <SubmitButton
        isLoading={loading}
        title="Save Adjustments"
        type="submit"
      />
    </form>
  );
};

export default TransferAdjustment;
