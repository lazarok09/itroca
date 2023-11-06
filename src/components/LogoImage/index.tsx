import Image from "next/image";
import { ImageContainer } from "./styles";
import { Heading } from "../Heading";

export const LogoImage = () => {
  return (
    <ImageContainer>
      <Image
        src={"/icon-md.png"}
        fill={true}
        alt={"itroca logo"}
        objectFit="contain"
      />
    </ImageContainer>
  );
};
