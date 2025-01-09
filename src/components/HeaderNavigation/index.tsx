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

  const handleAvatar = () => {
    if (status === "notauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated") {
      router.push("/products");
    }
  };

  const userNameOrEquivalent = useMemo(
    () => (name?.length ? name?.at(0) : "L"),
    [name]
  );

  return (
    <nav
      className={` w-full flex justify-center items-center drop-shadow-md lg:drop-shadow-xl `}
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
      <div className="flex">
        <button onClick={handleAvatar} title={userNameOrEquivalent}>
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt={userNameOrEquivalent}
            src={image}
          >
            {userNameOrEquivalent}
          </Avatar>
        </button>
      </div>
    </nav>
  );
};
