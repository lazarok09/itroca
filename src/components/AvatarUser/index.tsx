
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useMemo } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAvatarUser } from "@/hooks/avatar";

export async function AvatarUser() {
  const { handleAvatar, image, name, status, userNameOrEquivalent } =
    useAvatarUser();

  const renderAvatar = useMemo(() => {
    if (status === "authenticated" || status === "notauthenticated") {
      <AccountCircleIcon className="text-white " />;
    }

    return (
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt={userNameOrEquivalent}
        src={image}
      >
        {userNameOrEquivalent}
      </Avatar>
    );
  }, [image, userNameOrEquivalent, status]);

  return (
    <div className="flex drop-shadow-md lg:drop-shadow-xl  ">
      <button
        type="button"
        onClick={handleAvatar}
        title={name && name?.length ? name : "Login"}
      >
        {renderAvatar}
      </button>
    </div>
  );
}
