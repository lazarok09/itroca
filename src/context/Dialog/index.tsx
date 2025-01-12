"use client";

import React, { RefObject, useRef, useState } from "react";
import { DialogContext } from "./context";
import { DialogContainer } from "@/containers/Dialog";

export interface DialogProps {
  dialogRef: RefObject<HTMLDialogElement> | null;
  body: React.ReactNode | null;
  setBody: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

export const CustomDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [body, setBody] = useState<React.ReactNode | null>(null);

  return (
    <DialogContext.Provider
      value={{
        dialogRef,
        body,
        setBody,
      }}
    >
      <DialogContainer dialogRef={dialogRef} body={body} setBody={setBody} />

      {children}
    </DialogContext.Provider>
  );
};
