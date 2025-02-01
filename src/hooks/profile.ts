import { iTrocaSession } from "@/context/Session";
import { useSession } from "./session";


type UserProfileResults = {
  session: iTrocaSession;
};

export const useProfile = (): UserProfileResults => {
  const { session } = useSession();

  return { session };
};
