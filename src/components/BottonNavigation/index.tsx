"use client";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginIcon from "@mui/icons-material/Login";

enum Redirects {
  products = "products",
  home = "home",
  login = "login",
}

export const FooterBottonNavigation = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  function handleRedirect(destination: keyof typeof Redirects) {
    if (destination === "home") {
      return router.push("/");
    }
    return router.push(`/${Redirects[destination]}`);
  }

  return (
    <nav className="flex gap-4    items-center justify-center fixed bottom-0 w-full drop-shadow-md lg:drop-shadow-xl">
      <Box sx={{ width: "100%" }} borderColor={"#fffff"}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => handleRedirect(Redirects.home)}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Produtos"
            icon={<ShoppingCartIcon />}
            onClick={() => handleRedirect(Redirects.products)}
          />
          <BottomNavigationAction
            label="Login"
            icon={<LoginIcon />}
            onClick={() => handleRedirect(Redirects.login)}
          />
        </BottomNavigation>
      </Box>
    </nav>
  );
};
