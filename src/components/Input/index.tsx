import { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="
    border
    border-solid
  border-gray-400
    rounded-md
    py-4 px-3.5
    w-64
    h-14
    bg-transparent
    text-base
    placeholder:capitalize
    focus-visible:outline-blue-500
    focus-visible:border-none
    focus:w-64
    focus:h-14
    autofill:bg-transparent
    autofill:text-black
    autofill:shadow-black
    font-sans
  "
      {...props}
    />
  );
};
