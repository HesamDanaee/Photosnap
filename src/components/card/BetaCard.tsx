import BarHorizontal from "../hero/BarHorizontal";
import BarVertical from "../hero/BarVertical";
import CtaBtn from "../CtaBtn";

export default function BetaCard() {
  return (
    <section className="relative flex h-[280px] w-full flex-row items-center justify-between bg-cover bg-center bg-no-repeat px-64-8 sm:bg-bg-beta-tablet lg:bg-bg-beta-desktop sm-max:flex-col sm-max:items-end sm-max:justify-around sm-max:bg-bg-beta-mobile">
      <BarVertical />
      <BarHorizontal />
      <h1 className="max-w-[50%] text-3xl font-bold leading-tight tracking-widest text-white sm-max:text-2xl">
        WE'RE IN BETA. GET YOUR INVITE TODAY!
      </h1>
      <CtaBtn card={false} ctatext="get an invite" color="text-white" />
    </section>
  );
}
