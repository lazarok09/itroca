import { Typography } from "@mui/material";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { useMemo } from "react";

type Props = {
  variant: "login" | "logout" | "products" | "dashboard";
  href: string;
};

type VARIANT = {
  [key in Props["variant"]]: JSX.Element;
};

const VARIANT_MATCH: VARIANT = {
  login: <LoginIcon />,
  logout: <LogoutIcon />,
  products: <ShoppingCartIcon />,
  dashboard: <SpaceDashboardIcon />,
};

export const DialogLink = ({ variant, href }: Props) => {
  const boddy = useMemo(
    () => (
      <Typography
        variant="h6"
        component="div"
        className="flex gap-2  place-items-center"
      >
        {VARIANT_MATCH[variant]}

        <span className="capitalize">{variant}</span>
      </Typography>
    ),
    [href]
  );

  return href?.length ? <Link href={href}>{boddy}</Link> : boddy;
};
