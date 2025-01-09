import { iTrocaSession } from "@/context/Session";
import { useSession } from "./session";

type UseProfileProps = {};

type UserProfileResults = {
  session: iTrocaSession;
};

export const useProfile = (): UserProfileResults => {
  const { session } = useSession();

  return { session };
};
