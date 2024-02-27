import { ButtonHTMLAttributes } from "react";
const defaultClass = `
text-white
my-2
bg-gray-500 py-3 px-6 
rounded-lg text-base cursor-pointer
disabled:bg-red-500
disabled:cursor-not-allowed
data-[loading=true]:disabled:cursor-wait
`;
export const CustomButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`${defaultClass} ${props.className}`} >
      {props.children}
    </button>
  );
};
