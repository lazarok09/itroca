import { Heading } from "../Heading";
import { LogoImage } from "../LogoImage";
import {
  HomePresentationDescription,
  HomePresentationDescriptionDanger,
  HomePresentationLogoContainer,
  HomePresentationWrapper,
} from "./styles";

export const HomePresentation = () => {
  return (
    <HomePresentationWrapper>
      <HomePresentationLogoContainer>
        <LogoImage />
        <Heading>iTroca</Heading>
      </HomePresentationLogoContainer>
      <HomePresentationDescription>
        Compras e avaliações
      </HomePresentationDescription>
      <HomePresentationDescriptionDanger>
        É fácil, é rápido, é grátis
      </HomePresentationDescriptionDanger>
    </HomePresentationWrapper>
  );
};
