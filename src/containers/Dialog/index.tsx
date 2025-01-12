import { DialogProps } from "@/context/Dialog";
import { useSession } from "@/hooks/session";
import { Close } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

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
      <div className="flex flex-col ">
        {isAuthenticated ? (
          <Link href="/dashboard">
            <Typography variant="h6" component="div">
              Dashboard
            </Typography>
          </Link>
        ) : null}

        <Link href="/products">
          <Typography variant="h6" component="div">
            Products
          </Typography>
        </Link>

        {!isAuthenticated ? (
          <Link href="/login">
            <Typography variant="h6" component="div">
              Login
            </Typography>
          </Link>
        ) : null}

        <Typography variant="h6" component="div">
          Log out
        </Typography>
      </div>

      <form method="dialog">
        <Button
          title={"Fechar"}
          className="cursor-pointer  "
          onClick={handleToggleMenu}
        >
          <Close />
        </Button>
      </form>
    </div>
  );
};
