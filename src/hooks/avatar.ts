"use client";

import { useProfile } from "@/hooks/profile";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export const useAvatarUser = () => {
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

  return { handleAvatar, userNameOrEquivalent, name, image, status };
};
