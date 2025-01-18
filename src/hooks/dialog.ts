import { DialogContext } from "@/context/Dialog/context";
import { useContext } from "react";

export const useDialog = () => {
  const context = useContext(DialogContext);

  const closeDialog = () => {
    
    if (context.dialogRef?.current) {
      if (context.dialogRef.current.open) {
        context.setBody(null);
        context.dialogRef.current.close();
      }
    }
  };
  return { ...context, closeDialog };
};
