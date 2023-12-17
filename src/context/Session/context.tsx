import { createContext } from "react";
import { CustomSession } from ".";

export const DEFAULT_VALUES: CustomSession = {
  session: {
    status: "pending",
    accessToken: null,
    user: {
      address: null,
      age: null,
      email: null,
      id: null,
      name: null,
    },
  },
  setSession: () => {},
};
export const CustomSessionContext = createContext(DEFAULT_VALUES);
