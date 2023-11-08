"use client";

import styled, { css } from "styled-components";

export const HomePresentationWrapper = styled.article`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const HomePresentationDescription = styled.p``;

export const HomePresentationLogoContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    gap: 14px;
    width: 100%;
    align-items: center;
  `}
`;

export const HomePresentationDescriptionDanger = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.bs_danger};
    text-transform: capitalize;
  `}
`;
