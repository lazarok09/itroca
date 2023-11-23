import Image from "next/image";
import { HTMLAttributes } from "react";

export const LogoImage = (rest: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-20 w-20 relative" {...rest}>
      <Image
        src={"/icon-md.png"}
        fill={true}
        alt={"itroca logo"}
        objectFit="contain"
      />
    </div>
  );
};
