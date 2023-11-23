import React, { HTMLAttributes } from "react";

type HeaderLinkProps = {
  children: React.ReactNode;
  active: boolean;
} & HTMLAttributes<HTMLDivElement>;
export const HeaderLink = ({ children, active, ...rest }: HeaderLinkProps) => {
  return (
    <div
      className={`
    py-2 px-6
    font-semibold
    rounded-lg
    shadow-md
    cursor-pointer
   ${active && "bg-green-400"}
    
    `}
      {...rest}
    >
      {children}
    </div>
  );
};
