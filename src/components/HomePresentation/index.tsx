import { Heading } from "../Heading";
import { LogoImage } from "../LogoImage";
import * as Styled from "./styles";

export const HomePresentation = () => {
  return (
    <Styled.HomePresentationWrapper>
      <Styled.HomePresentationLogoContainer>
        <LogoImage />
        <Heading>iTroca</Heading>
      </Styled.HomePresentationLogoContainer>
      <Styled.HomePresentationDescription>
        Compras e avaliações
      </Styled.HomePresentationDescription>
      <Styled.HomePresentationDescriptionDanger>
        É fácil, é rápido, é grátis
      </Styled.HomePresentationDescriptionDanger>
    </Styled.HomePresentationWrapper>
  );
};
