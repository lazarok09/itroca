import { useSession } from "@/hooks/session";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DialogLogOutActionButton, DialogLink } from "./dialog-link";

export const HeaderMenuDialogBody = ({
  handleToggleMenu,
}: {
  handleToggleMenu: () => void;
}) => {
  const { isAuthenticated } = useSession();

  return (
    <div className="flex  flex-row align-center w-50  p-4">
      <nav className="flex flex-col gap-2">
        <form method="dialog" className="flex  w-full gap-2 justify-end ">
          <Button
            title={"Fechar"}
            className="cursor-pointer  "
            onClick={handleToggleMenu}
          >
            <Close className="text-emeraldStrong" />
          </Button>
        </form>

        {isAuthenticated ? (
          <DialogLink href="/dashboard" variant="dashboard" />
        ) : null}

        <DialogLink href="/products" variant="products" />

        {!isAuthenticated ? <DialogLink href="/login" variant="login" /> : null}
        <DialogLogOutActionButton />
      </nav>
    </div>
  );
};
