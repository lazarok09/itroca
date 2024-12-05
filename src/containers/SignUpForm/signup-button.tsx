import Link from "next/link";

export const LoginButton = () => {
  return (
    <div className="flex-col">
      <hr />
      <div>
        <Link className="underline" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};
