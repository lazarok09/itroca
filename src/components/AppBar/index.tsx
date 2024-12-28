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

export default function HeaderAppBar() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("signup");
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#E3262E" }}>
      {" "}
      {/* Cor alterada para o seu primaryBrand */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Button onClick={handleRedirect} color="inherit">
            Cadastro
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
