import { DialogProps } from "@/context/Dialog";

type DialogContainerProps = {} & Omit<DialogProps, "setBody">;

export const DialogContainer = ({ dialogRef, body }: DialogContainerProps) => {
  return (
    <dialog className="flex min-h-screen" ref={dialogRef} id="main-dialog">
      {dialogRef?.current && dialogRef?.current.open ? body : null}
    </dialog>
  );
};
