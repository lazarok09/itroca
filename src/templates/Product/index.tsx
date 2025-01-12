import { Header } from "@/components/Header";

import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";
import { FooterBottomNavigation } from "@/components/BottomNavigation";
import { getProduct } from "@/services/itroca";

export default async function ProductTemplate({ id }: { id: string }) {
  const product = await getProduct({
    id: String(id),
  });

  return (
    <div className="min-h-screen">
      <Header />

      <div
        data-testid="home"
        className="  display: flex;
          flex
          font-mono
          h-full
          justify-center
          items-center
          place-items-center
          gap-1
          min-h-[80vh]
          "
      >
        <div className="motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier ">
          <LogoImage />
        </div>
        <Heading>iTroca </Heading>
        {JSON.stringify(product, null, 2)}
      </div>

      <FooterBottomNavigation />
    </div>
  );
}
