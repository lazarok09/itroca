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

  const headerMenuDialogBody = React.useMemo(() => {
    return (
      <div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Link 1
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Link 2
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Link 3
        </Typography>
        <form method="dialog">
          <Button
            title={"Fechar"}
            className="cursor-pointer  "
            style={{
              border: "1px solid red",
            }}
          >
            <Close />
          </Button>
        </form>
      </div>
    );
  }, []);

  const handleRedirect = () => {
    router.push("signup");
  };

  const handleToggleMenu = () => {

    setBody(headerMenuDialogBody);
    
    if (dialogRef?.current) {
      return dialogRef.current.showModal();
    }
  };

  const handleOpenMenu = () => {};

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
