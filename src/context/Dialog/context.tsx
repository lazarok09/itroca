"use client";

import { RefObject, createContext } from "react";

import { DialogProps } from ".";

export const DEFAULT_VALUES: DialogProps = {
  dialogRef: null,
  body: null,
  setBody: () => {},
};
export const DialogContext = createContext(DEFAULT_VALUES);
