import BarHorizontal from "../hero/BarHorizontal";
import BarVertical from "../hero/BarVertical";
import CtaBtn from "../CtaBtn";

export default function BetaCard() {
  return (
    <section className="sm-max: relative flex h-[280px] w-full flex-row items-center justify-between bg-cover bg-center bg-no-repeat px-64-8 sm:bg-[url('/src/assets/images/new/webp-format/beta-tablet.webp')] lg:bg-[url('/src/assets/images/new/webp-format/beta-desktop.webp')] sm-max:flex-col sm-max:items-end sm-max:justify-around sm-max:bg-[url('/src/assets/images/new/webp-format/beta-mobile.webp')] sm-max:py-40-8">
      <BarVertical />
      <BarHorizontal />
      <h1 className="max-w-[50%] text-3xl font-bold leading-tight tracking-widest text-white sm-max:max-w-[100%] sm-max:text-center sm-max:text-xl sm-max:leading-normal">
        WE'RE IN BETA. GET YOUR INVITE TODAY!
      </h1>
      <CtaBtn
        card={false}
        ctatext="get an invite"
        color="text-white sm-max:self-middle"
      />
    </section>
  );
}
