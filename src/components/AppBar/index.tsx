"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { useRouter } from "next/navigation";
import { HeaderNavigation } from "../HeaderNavigation";
import { useDialog } from "@/hooks/dialog";
import { UserAvatar } from "../UserAvatar";
import { AvatarUser } from "../AvatarUser";
import { Divider, InputBase } from "@mui/material";

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

  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const toggleSearch = () => {
    setIsSearchExpanded((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#E3262E" }}>
      <AppBar position="static">
        <Toolbar>
          <nav className={` w-full flex justify-between items-center`}>
            <MenuIcon onClick={handleToggleMenu} />
            <form className="flex " action="/products?search=" method="get">
              <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="New iPhone 2025"
                inputProps={{ "aria-label": "search for a product" }}
                // make a animation to show the search input
                className="transition-all duration-500 ease-in-out transform "
                style={{
                  width: isSearchExpanded ? "100%" : "0",
                  opacity: isSearchExpanded ? "1" : "0",
                }}
                type="search"
              />
              <IconButton
                color="inherit"
                type="button"
                sx={{ p: "16px" }}
                aria-label="search"
              >
                <SearchIcon onClick={toggleSearch} />
              </IconButton>
              <Divider sx={{ height: 40, m: 1 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <AvatarUser />
              </IconButton>
            </form>
          </nav>
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
