import { DialogProps } from "@/context/Dialog";
import { useSession } from "@/hooks/session";
import { Close } from "@mui/icons-material";
import { Button, Dialog, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { DialogLink } from "./dialog-link";
type DialogContainerProps = {} & DialogProps;

export const DialogContainer = ({
  dialogRef,
  body,
  setBody,
}: DialogContainerProps) => {
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
          setBody(null);
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

export const HeaderMenuDialogBody = ({
  handleToggleMenu,
}: {
  handleToggleMenu: () => void;
}) => {
  const { isAuthenticated } = useSession();

  return (
    <div className="flex  flex-row align-center w-50  p-4">
      <nav className="flex flex-col gap-2">
        <form method="dialog" className="flex  w-full gap-2 justify-end ">
          <Button
            title={"Fechar"}
            className="cursor-pointer  "
            onClick={handleToggleMenu}
          >
            <Close className="text-emeraldStrong" />
          </Button>
        </form>

        {isAuthenticated ? (
          <DialogLink href="/dashboard" variant="dashboard" />
        ) : null}

        <DialogLink href="/products" variant="products" />

        {!isAuthenticated ? <DialogLink href="/login" variant="login" /> : null}

        <DialogLink href="/logout" variant="logout" />
      </nav>
    </div>
  );
};
