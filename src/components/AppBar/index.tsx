"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { useRouter } from "next/navigation";

import { useDialog } from "@/hooks/dialog";

import { AvatarUser } from "../AvatarUser";
import { Divider, InputBase } from "@mui/material";

import { toast } from "react-toastify";
import { HeaderMenuDialogBody } from "@/containers/Dialog";
export const SEARCH_INPUT_NAME = "search-input";

export default function HeaderAppBar() {
  const router = useRouter();
  const { dialogRef, setBody } = useDialog();

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
  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const inputValue = String(form.get(SEARCH_INPUT_NAME)).trim();
    if (!inputValue) {
      toast.error("Valor não encontrado", {
        className: "toast-custom-icon",
        toastId: `error-${e}`,
        autoClose: 1500,
      });
      return;
    }
    router.push(`/products?name=${inputValue}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-emeraldDark">
          <nav className={` w-full flex justify-between items-center`}>
            <MenuIcon onClick={handleToggleMenu} />
            <form
              className="flex "
              action="/products?search="
              method="get"
              onSubmit={onSearchSubmit}
            >
              <InputBase
                name={SEARCH_INPUT_NAME}
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
