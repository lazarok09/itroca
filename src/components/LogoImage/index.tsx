import Image from "next/image";
import * as Styled from "./styles";

export const LogoImage = () => {
  return (
    <Styled.ImageContainer>
      <Image
        src={"/icon-md.png"}
        fill={true}
        alt={"itroca logo"}
        objectFit="contain"
      />
    </Styled.ImageContainer>
  );
};
