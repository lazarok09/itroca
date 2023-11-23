import { InputHTMLAttributes } from "react";

export const InputSubmit = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="  
          text-white
            my-2
          bg-gray-500 py-3 px-6 
          rounded-lg text-base cursor-pointer
        disabled:bg-red-500"
      {...props}
    />
  );
};
