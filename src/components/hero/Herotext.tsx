import { HeroTextContent } from "../../../types";
import BarVertical from "./BarVertical";
import BarHorizontal from "./BarHorizontal";
import CtaBtn from "../CtaBtn";
export default function HeroText({
  title,
  text,
  ctatext,
  bg,
  color,
  card = false,
  stories,
  bar = false,
  cta = true,
}: HeroTextContent) {
  return (
    <div
      className={`relative flex ${
        card
          ? "h-auto w-[80%] lg:my-16-8 lg:w-[80%] sm-max:h-[35%]"
          : "h-full sm:basis-[60%] lg:basis-[65%] xl:basis-[30%] sm-max:h-[55%] sm-max:w-screen"
      } flex-row items-center justify-center ${bg} ${color} sm-max:order-2 
      ${
        stories &&
        `h-[80%] items-center sm-max:${bg} sm:ml-16-8 md:w-[80%] lg:ml-32-8 sm-max:bg-black sm-max:py-10`
      }
      `}
    >
      {bar && <BarHorizontal />}
      <div
        className={`relative flex w-full flex-col justify-around ${
          card ? " py-3" : "p-10 lg:p-88-8"
        } sm:justify-center
        ${stories && " w-auto sm:justify-between"}
        `}
      >
        {bar && <BarVertical />}
        {stories && (
          <p className="mb-16-8 text-sm leading-loose tracking-widest">
            LAST MONTH'S FEATURED STORY
          </p>
        )}
        <h2
          className={`${
            card
              ? "text-base tracking-wider lg:text-base sm-max:text-xl"
              : "text-2xl tracking-widest md-max:text-2xl"
          } font-medium  leading-tight`}
        >
          {title}
        </h2>
        {stories && (
          <p className="my-16-8 text-sm leading-normal tracking-wider">
            March 2nd 2020 by <strong>John Appleseed</strong>
          </p>
        )}
        <p
          className={`${
            card ? "py-2 text-sm lg:text-sm" : "py-8 sm-max:text-base"
          } font-thin tracking-wide opacity-60`}
        >
          {text}
        </p>
        {card && <div className="my-8-8 h-px w-full bg-white"></div>}
        {cta && <CtaBtn card={card} color={color} ctatext={ctatext!} />}
      </div>
    </div>
  );
}
