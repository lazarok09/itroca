import { DialogProps } from "@/context/Dialog";
import { useEffect } from "react";

type DialogContainerProps = {} & Omit<DialogProps, "setBody">;

export const DialogContainer = ({ dialogRef, body }: DialogContainerProps) => {
  useEffect(() => {
    const dialogCloseHandler = (event: MouseEvent) => {
      const rect =
        dialogRef?.current && dialogRef?.current.getBoundingClientRect();
      if (rect) {
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          dialogRef.current.close();
        }
      }
    };

    dialogRef?.current?.addEventListener("click", dialogCloseHandler);

    return () => {
      if (dialogRef?.current) {
        dialogRef.current.removeEventListener("click", dialogCloseHandler);
      }
    };
  }, [dialogRef]);

  return (
    <dialog className="flex min-h-screen " ref={dialogRef} id="main-dialog">
      {dialogRef?.current && dialogRef?.current.open ? body : null}
    </dialog>
  );
};
