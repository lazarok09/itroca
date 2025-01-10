"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { NavigationButton } from "../NavigationButton";
import { useMediaQuery } from "@mui/material";

export const ROUTES = [
  { path: "/", label: "Home", icon: <HomeIcon /> },
  { path: "/products", label: "Produtos", icon: <ShoppingCartIcon /> },
  { path: "/login", label: "Login", icon: <LoginIcon /> },
];

export const FooterBottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const [activeIndex, setActiveIndex] = useState(0);

  // Atualiza o índice ativo com base na rota atual
  useEffect(() => {
    const currentIndex = ROUTES.findIndex((route) => route.path === pathname);
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [pathname]);

  const handleNavigation = (index: number) => {
    const selectedRoute = ROUTES[index];
    if (selectedRoute && selectedRoute.path !== pathname) {
      router.push(selectedRoute.path);
    }
  };
  if (!isTablet) {
    return null;
  }
  return (
    <nav
      className={`fixed bottom-0 w-full flex justify-center items-center drop-shadow-md lg:drop-shadow-xl `}
    >
      <div className="flex flex-row justify-center p-6">
        {ROUTES.map((route, index) => (
          <NavigationButton
            activeIndex={activeIndex === index}
            handleNavigation={() => handleNavigation(index)}
            key={route.path}
            label={route.label}
            icon={route.icon}
          />
        ))}
      </div>
    </nav>
  );
};
