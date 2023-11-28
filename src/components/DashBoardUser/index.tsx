import Image from "next/image";

export const DashboardUser = ({ user }: { user: iTrocaUser | undefined }) => {
  if (!user) return <span>Usuário não encontrado</span>;
  return (
    <div className="relative flex p-50 justify-center items-center gap-3 ">
      <Image
        src={"https://avatars.githubusercontent.com/u/45147892?v=4"}
        height={60}
        width={60}
        alt={`Uma fotografia de ${user.name}`}
        className="rounded-full"
      />
      <p className="capitalize">
        {" "}
        Olá <span className="text-red-500">{user.name}</span>
      </p>
    </div>
  );
};
