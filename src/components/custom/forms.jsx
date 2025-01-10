import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormEnum } from "@/constants/data";
const Forms = ({ schema, fields, handleSubmit,formType}) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
  });

  return (
    <div className="w-full max-w-3xl">
      <form
        className={`${FormEnum.CAREER===formType?"bg-white":"bg-gray-200"} p-10 rounded-lg`}
        onSubmit={form.handleSubmit((data) => {
            // console.log("Form data before submit:", data); // Logs processed form data
            handleSubmit(data); // Passes data to parent onSubmit function
        })}

      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field) => {
            if (field.name === "email" ||  field.name === "message") {
              return null; // Skip fields handled separately below
            }

            return (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block font-bold text-gray-700"
                >
                  {field.label} {field.required && "*"}
                </label>
                <input
                  type={field.type || "text"}
                  id={field.name}
                  placeholder={field.placeholder}
                  {...form.register(field.name)}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {form.formState.errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors[field.name]?.message}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          {fields
            .filter((field) => field.name === "email" || ( field.name === "message"))
            .map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block font-bold text-gray-700"
                >
                  {field.label} {field.required && "*"}
                </label>
                {field.type === "message" ? (
                  <textarea
                    id={field.name}
                    placeholder={field.placeholder}
                    {...form.register(field.name)}
                    className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    id={field.name}
                    placeholder={field.placeholder}
                    {...form.register(field.name)}
                    className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
                {form.formState.errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors[field.name]?.message}
                  </p>
                )}
              </div>
            ))}
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      <p className="text-sm text-gray-600 mb-6 pl-10">* indicates required fields</p>
    </div>
  );
};

export default Forms;
