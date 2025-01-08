"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

export const ROUTES = [
  { path: "/", label: "Home", icon: <HomeIcon /> },
  { path: "/products", label: "Produtos", icon: <ShoppingCartIcon /> },
  { path: "/login", label: "Login", icon: <LoginIcon /> },
];

type Props = {
  variant?: "header" | "footer";
};

export const FooterBottomNavigation = ({ variant = "footer" }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

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

  const navClasses = useMemo(() => {
    if (variant === "header") {
      return `fixed w-full flex justify-center items-center drop-shadow-md lg:drop-shadow-xl `;
    }

    return `fixed bottom-0 w-full flex justify-center items-center drop-shadow-md lg:drop-shadow-xl `;
  }, [variant]);

  return (
    <nav className={navClasses}>
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

type BottomNavigationActionProps = {
  label: string;
  icon: JSX.Element;
  handleNavigation: () => void;
  activeIndex: boolean;
};

export const NavigationButton = (props: BottomNavigationActionProps) => {
  const { handleNavigation, icon, label, activeIndex } = props;

  return (
    <button
      onClick={handleNavigation}
      className={`${
        activeIndex ? "text-green-500" : "text-zinc-400 px-4"
      } flex flex-col items-center justify-center`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
