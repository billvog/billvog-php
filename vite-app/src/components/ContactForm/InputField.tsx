import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  label: string;
  name: string;
  error?: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  textarea,
  size: _,
  ...props
}) => {
  const hasError = typeof error === "string";

  const InputStyle = `w-full border-2 ${
    hasError ? "border-red-500" : "border-zinc-900"
  } bg-zinc-700 text-white placeholder:text-zinc-500 placeholder:font-bold focus:outline-none focus:ring-0`;

  return (
    <div className="relative">
      <label
        htmlFor={props.name}
        className={`${hasError ? "bg-red-500" : "bg-zinc-900"} text-${
          hasError ? "white" : "purple-400"
        } font-semibold text-sm absolute top-[-0.75rem] left-[.75rem] px-2`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={props.name}
          placeholder={props.placeholder}
          className={InputStyle + " min-h-[50px] max-h-[300px]"}
          {...props}
        />
      ) : (
        <input
          id={props.name}
          placeholder={props.placeholder}
          className={InputStyle}
          {...props}
        />
      )}
      {typeof error === "string" && (
        <div
          className={`${!textarea ? "mt-1.5" : ""} text-red-500 font-semibold text-sm`}
        >
          {error}
        </div>
      )}
    </div>
  );
};
