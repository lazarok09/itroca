"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { FooterBottomNavigation } from "../BottomNavigation";

export default function HeaderAppBar() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("signup");
  };

  const handleToggleMenu = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const handleOpenMenu = () => {};
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#E3262E" }}>
      <AppBar position="static">
        <Toolbar>
          <FooterBottomNavigation   variant="header"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
