import { DialogContext } from "@/context/Dialog/context";
import { useContext } from "react";

export const useDialog = () => {
  const context = useContext(DialogContext);

  return { ...context };
};
