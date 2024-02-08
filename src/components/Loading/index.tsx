import Image from "next/image";
const icon = "/linear_loading.svg";
export const Loading = () => {
  return <Image src={icon} height={150} width={150} alt={"Loading..."} />;
};
