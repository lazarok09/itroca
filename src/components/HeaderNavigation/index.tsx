"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

import { NavigationButton } from "../NavigationButton";
import { ROUTES } from "../BottomNavigation";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useProfile } from "@/hooks/profile";

export const HeaderNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    session: {
      status,
      user: { name, image },
    },
  } = useProfile();

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

  return (
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
  );
};
