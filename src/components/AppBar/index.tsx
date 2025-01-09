"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { HeaderNavigation } from "../HeaderNavigation";
import { useDialog } from "@/hooks/dialog";

export default function HeaderAppBar() {
  const router = useRouter();
  const { dialogRef, setBody } = useDialog();

  const handleRedirect = () => {
    router.push("signup");
  };

  const handleToggleMenu = () => {
    setBody(<HeaderMenuDialogBody handleToggleMenu={handleToggleMenu} />);

    if (dialogRef?.current) {
      if (dialogRef.current.open) {
        return dialogRef.current.close();
      }

      return dialogRef.current.showModal();
    }
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#E3262E" }}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon onClick={handleToggleMenu} />
          <HeaderNavigation />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const HeaderMenuDialogBody = ({
  handleToggleMenu,
}: {
  handleToggleMenu: () => void;
}) => {
  return (
    <div className="flex  flex-row align-center w-50  p-4">
      <div className="flex flex-col ">
        <Typography variant="h6" component="div">
          Dashboard
        </Typography>
        <Typography variant="h6" component="div">
          Products
        </Typography>

        <Typography variant="h6" component="div">
          Login
        </Typography>
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
