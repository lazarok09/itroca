"use client";

import { theme } from "@/styles/theme";

import React from "react";
import { ThemeProvider } from "styled-components";

export const StyledThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
