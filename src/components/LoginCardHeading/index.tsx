import { Heading } from "../Heading";
type Props = {
  text: string;
};
export const SignCardHeading = ({ text }: Props) => {
  return (
    <div
      className="
    bg-green-500 border-gray-500
      py-2 px-4 font-sans text-lg
      rounded-t-md border-b-gray-500 "
    >
      <Heading>{text}</Heading>
    </div>
  );
};
