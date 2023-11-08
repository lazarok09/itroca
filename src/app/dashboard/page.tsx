import { DashBoardGuard } from "@/services/auth";
import { Dashboard } from "@/templates/Dashboard";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();

  return (
    <DashBoardGuard session={session}>
      <h1>Hello {session?.user.email}</h1>
    </DashBoardGuard>
  );
}
