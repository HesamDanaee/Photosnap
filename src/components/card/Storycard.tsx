import { ReactNode } from "react";

export default function StoriesCard({
  children,
  bg_mobile,
  bg_tablet,
}: {
  children: ReactNode;
  bg_mobile?: string;
  bg_tablet?: string;
}) {
  return (
    <div
      className={`${bg_mobile} ${bg_tablet} relative bottom-0 flex h-full items-end justify-center from-[#ffc694] via-[#bc7198] to-[#5776ff] bg-cover bg-center bg-no-repeat transition-[bottom] duration-300 after:absolute after:left-0  after:bottom-0 after:h-0 after:w-full after:bg-gradient-to-r after:transition-all  after:duration-150 hover:bottom-[10px] hover:shadow-2xl hover:after:h-1 sm:h-[450px] sm:basis-[50%] md:h-[350px] md:basis-[25%] lg:h-[500px] sm-max:h-[450px] sm-max:basis-[100%]`}
    >
      {children}
    </div>
  );
}
