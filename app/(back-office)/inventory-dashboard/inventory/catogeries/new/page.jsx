"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInputs from "@/components/dashboard/FormInputs";
import SubmitButton from "@/components/dashboard/SubmitButton";
import TextAreaInput from "@/components/dashboard/TextAreaInput";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewCatogry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  // const onSubmit = data => console.log(data);
  function onSubmit(data) {
    console.log(data);
    reset()
  }

  return (
    <div>
      {/*header  */}
      <FormHeader title={"new"} href={"3"} />

      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200  my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        {/* label ,name,Isrequired=true,register,type,className="sm:col-span-2" */}
        <TextInputs
          lab cel="Category Title"
          name="title"
          register={register}
          errors={errors}
        />

         {/* Description */}
         {/*  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2", */}
        <TextAreaInput 
        label="Category"
        title='Category Title'
        name="Message"
        register={register}
        errors={errors}
        
        />

        <SubmitButton isLoading={loading} title="Category"/>
  
      </form>
    </div>
  );
};

export default NewCatogry;
