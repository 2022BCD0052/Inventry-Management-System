"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInputs from "@/components/FormInputs/TextInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeApiRequest } from "@/lib/makePostRequest";

const NewBrands = () => {
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
      endpoint: "api/brands", 
      data, 
      resourceName: "Brands", 
      reset
    });
  }

  return (
    <div>
      <FormHeader title={"New Brand"} href={"/inventory-dashboard/inventory"} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <TextInputs
          label="Brand Title"
          name="title"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />
        


        <SubmitButton isLoading={loading} title=" Brand" type="submit" />
      </form>
    </div>
  );
};

export default NewBrands;
