import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Heading = ({ children }: Props) => {
  return (
    <div className="font-bold text-black font-sans">
      <h1>{children}</h1>
    </div>
  );
};
