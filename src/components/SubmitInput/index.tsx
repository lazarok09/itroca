import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="  
          text-white
            my-2
          bg-gray-500 py-3 px-6 
          rounded-lg text-base cursor-pointer
        disabled:bg-red-500
          disabled:cursor-not-allowed
          data-[loading=true]:disabled:cursor-wait
        "
      {...props}
    >
      {props.children}
    </button>
  );
};
