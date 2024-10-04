"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInputs from "@/components/FormInputs/TextInputs";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewUnit = () => {
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
      const response = await fetch(`/api/units/`, {
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
    <div>
      <FormHeader title={"New Unit"} href={"/inventory-dashboard/inventory"} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <TextInputs
          label="Unit Title"
          name="title"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />
         <TextInputs
          label="Unit Abbreviation"
          name="abbreviation"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />


        <SubmitButton isLoading={loading} title="Save Unit" type="submit" />
      </form>
    </div>
  );
};

export default NewUnit;
