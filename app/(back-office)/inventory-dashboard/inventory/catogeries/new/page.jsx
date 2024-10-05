"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInputs from "@/components/FormInputs/TextInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { makeApiRequest } from "@/lib/makePostRequest";

const NewCategory = () => {
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
      endpoint: "api/categories", 
      data, 
      resourceName: "Categories", 
      reset
    });
  }
  return (
    <div>
      <FormHeader title={"New Category"} href={"/inventory-dashboard/inventory"} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <TextInputs
          label="Category Title"
          name="title"
          register={register}
          errors={errors}
          isRequired={true}
        />

        <TextAreaInput
          label="Category Description"
          name="description" // Ensure this matches your backend
          register={register}
          errors={errors}
          isRequired={true}
        />

        <SubmitButton isLoading={loading} title="Create Category" type="submit" />
      </form>
    </div>
  );
};

export default NewCategory;
