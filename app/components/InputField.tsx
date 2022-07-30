import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  textarea?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <div className="relative">
      <label
        htmlFor={field.name}
        className={`bg-${!!error ? "red-500" : "gray-300"} text-${
          !!error ? "white" : "gray-500"
        } font-semibold text-sm absolute px-2 rounded-md`}
        style={{
          top: -12,
          left: 5,
        }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={field.name}
          placeholder={props.placeholder}
          className={`w-full border-${
            !!error ? "red-500" : "gray-300"
          } border-2 rounded-lg`}
          {...props}
          {...field}
        />
      ) : (
        <input
          id={field.name}
          placeholder={props.placeholder}
          className={`w-full border-${
            !!error ? "red-500" : "gray-300"
          } border-2 rounded-lg`}
          {...props}
          {...field}
        />
      )}
      {error && touched && (
        <div
          className={`${
            !textarea ? "mt-1" : ""
          } text-red-500 font-semibold text-sm`}
        >
          {error}
        </div>
      )}
    </div>
  );
};
