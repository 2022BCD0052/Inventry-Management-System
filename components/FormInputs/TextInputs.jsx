import React from 'react'
// import { useForm } from 'react-hook-form'

function TextInputs({label ,name, defaultValue, isRequired = true,
    type,register,errors,className="sm:cols-span-2"}) {

    // const {register,formState:{errors}} = useForm()
  return (

  
       <div className={`className `}>
          <label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
          >
            {label}
          </label>
          <div className="mt-2">
            <input
              {...register(`${name}`, { required: isRequired})}
              type={type}
              name={name}
              id={label}
              autoComplete={name}
              // defaultValue="{defaultValue}"
              className=" w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder={`${name}... `}
            />
            {errors.title && (
              <span className="text-sm text-red-600 ">
                Catogry title is required
              </span>
            )}
          </div>
        </div>
 
  )
}

export default TextInputs
