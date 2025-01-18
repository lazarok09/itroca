import { Button, colors, Typography } from "@mui/material";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { useMemo } from "react";
import { useSession } from "@/hooks/session";
import { signOut } from "@/services/itroca";
import { DEFAULT_VALUES } from "@/context/Session/context";
import { useDialog } from "@/hooks/dialog";
import { toast } from "react-toastify";

type Props =
  | {
      variant: "login" | "logout" | "products" | "dashboard";
      href: string;
    }
  | LogoutVariant;

type LogoutVariant = {
  variant: "logout";
  href?: string;
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
  const { setSession } = useSession();
  const { closeDialog } = useDialog();

  const hanleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSession({
        status: "notauthenticated",
        user: DEFAULT_VALUES.session.user,
      });
      await signOut();
    } catch (e) {
      console.error(e);

      toast.error(`Service not available`, {
        className: "toast-custom-icon",
        toastId: `error-${e}`,
        autoClose: 2500,
        progressStyle: {
          background: colors.red["500"],
        },
      });

      closeDialog();
    }
  };

  const body = useMemo(
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

  if (!href?.length) {
    if (variant === "logout") {
      return (
        <form onSubmit={hanleSubmit}>
          <Button
            type="submit"
            className="outline-none bg-transparent border-none pointer p-0 "
          >
            {body}
          </Button>
        </form>
      );
    }
    return body;
  }

  return href?.length ? <Link href={href}>{body}</Link> : body;
};
