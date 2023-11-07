import styled, { css } from "styled-components";
export const HeaderWrapper = styled.header`
  ${() => css`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    padding: 4px 60px;
    justify-content: flex-end;
  `}
`;

export const HeaderNavigation = styled.nav`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `}
`;

export const HeaderLink = styled.div<{ active: boolean }>`
  ${({ theme, active }) => css`
    background: ${active ? theme.colors.bs_green : "transparent"};
    padding: 0.6rem 1.4rem;
    font-weight: 600;
    border-radius: 8px;
    box-shadow: 0 0.5rem 1rem #00000026;
  `}
`;
