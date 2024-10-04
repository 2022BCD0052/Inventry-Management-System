"use client";
import TextInputs from "@/components/FormInputs/TextInputs";
import SelectInput from "@/components/FormInputs/SelectInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
const TransferAdjustment = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log("Submitting data:", data); // Debugging log
    setLoading(true);
    const baseUrl = "/http://localhost:3000";

    try {
      const response = await fetch(`/api/adjustments/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);

      if (response.ok) {
        alert("Category created successfully");
        reset();
      } else {
        alert("Failed to create category");
      }
    } catch (error) {
      alert("An error occurred while creating the category");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid gap-6 sm:grid-cols-2  sm:gap-6 grid-cols-1">
        <TextInputs
          type="number"
          label="Enter  Amount of Stock Transfer"
          name="transferStockQty"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full col-span-1"
        />
        <SelectInput
          name="receivingWarehouseId"
          register={register}
          label="Select the WareHouse that will receive the Stock "
          options={selectsBranch}
          className="w-full"
        />
      </div>

      <TextAreaInput
        label=" WareHouse Notes"
        name="WareHouseNotes"
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
