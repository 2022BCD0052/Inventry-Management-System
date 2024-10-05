"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInputs from "@/components/FormInputs/TextInputs";
import SelectInput from "@/components/FormInputs/SelectInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { makeApiRequest } from "@/lib/makePostRequest";




const selectOptions = [
  {
    value: "Main",
    title: "Main",
  },
  {
    value: "Branch",
    title: "Branch",
  },

]
const NewWareHouse = () => {
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
      endpoint: "api/warehouse", 
      data, 
      resourceName: "WareHouse", 
      reset
    });
  }

  return (
    <div>
      <FormHeader
        title={"New Warehouse"}
        href={"/inventory-dashboard/inventory"}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-6 sm:grid-cols-2  sm:gap-6 grid-cols-1">
          
          <SelectInput 
          name="warehouseType"
          register={register}
          label="Select Warehouse Type"
          options={selectOptions}
          className="w-full"/>

          <TextInputs
           name="title"
            label="Warehouse Title"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full col-span-1"
          />
          <TextInputs
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full col-span-1"
          />
        </div>

        <TextAreaInput
          label="Warehouse Type"
          name="description"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />

        <SubmitButton isLoading={loading} title=" Unit" type="submit" />
      </form>
    </div>
  );
};

export default NewWareHouse;
