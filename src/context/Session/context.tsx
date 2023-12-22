"use client";

import { createContext } from "react";
import { CustomSession } from ".";

export const DEFAULT_VALUES: CustomSession = {
  session: {
    status: "pending",
    user: {
      address: undefined,
      age: undefined,
      email: undefined,
      id: undefined,
      name: undefined,
    },
  },
  setSession: () => {},
};
export const CustomSessionContext = createContext(DEFAULT_VALUES);
