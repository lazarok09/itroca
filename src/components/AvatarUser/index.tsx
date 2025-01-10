import { useProfile } from "@/hooks/profile";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

type Props = {
  handleAvatar: () => void;
  userNameOrEquivalent: string;
  image: string;
};

export const AvatarUser = () => {
  const router = useRouter();
  const {
    session: {
      status,
      user: { name, image },
    },
  } = useProfile();

  const userNameOrEquivalent = useMemo(
    () => (name?.length ? name?.at(0) : "L"),
    [name]
  );

  const handleAvatar = () => {
    if (status === "notauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated") {
      router.push("/products");
    }
  };

  return (
    <div className="flex drop-shadow-md lg:drop-shadow-xl ">
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
  );
};
