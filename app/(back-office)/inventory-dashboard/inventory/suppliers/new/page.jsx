"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInputs from "@/components/FormInputs/TextInputs";
import SelectInput from "@/components/FormInputs/SelectInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeApiRequest } from "@/lib/makePostRequest";

const Suppliers = () => {
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
      endpoint: "api/suppliers", 
      data, 
      resourceName: "Supplier", 
      reset
    });
  }
  
  return (
    <div>
      <FormHeader
        title={"New Supplier"}
        href={"/inventory-dashboard/inventory"}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-6 sm:grid-cols-2  sm:gap-6 grid-cols-1">
          <TextInputs
            label="Suppliers Name"
            name="title"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full "
          />
          <TextInputs
            label="Supplier Phone"
            name="phone"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full "
          />
          <TextInputs
            labselectOptionsel="Supplier Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full "
          />
          <TextInputs
            label="Supplier Address"
            name="address"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full "
          />
          <TextInputs
            label="Supplier Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full "
          />
          <TextInputs
            label="Supplier Code"
            name="supplierCode"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full "
          />
        </div>
        <div className="grid gap-4 mt-3">
          <TextInputs
            label="Supplier TIN"
            name="taxID"
            register={register}
            errors={errors}
            isRequired={true}
            className=" col-span-2 "
          />
          <TextAreaInput
            label="Supplier Payment Terms"
            name="paymentTerms"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
        </div>

        <SubmitButton isLoading={loading} title=" Supplier" type="submit" />
      </form>
    </div>
  );
};

export default Suppliers;
