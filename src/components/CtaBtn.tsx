import arrowWhite from "./../assets/images/arrow-white.svg";
import arrowBlack from "./../assets/images/arrow-black.svg";

export default function CtaBtn({
  color,
  ctatext,
  card,
  footer,
  beta,
}: {
  color?: string;
  ctatext: string;
  card: boolean;
  footer?: boolean;
  beta?: boolean;
}) {
  return (
    <a
      href="#"
      className={`group flex  cursor-pointer flex-row items-center  uppercase tracking-widest ${color}
      ${beta && "justify-center"}
      ${card && "justify-between"}
      ${(beta || footer) && "w-full"}
      ${footer && "justify-around"}
      `}
    >
      <span
        className={`relative before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:skew-x-[90deg] ${
          color === "text-black" ? "before:bg-black" : "before:bg-slate-100"
        } before:transition-[transform] before:duration-300 hover:before:skew-x-0 sm-max:text-sm ${
          card || footer ? "text-sm" : "lg:text-base sm-max:text-sm"
        }`}
      >
        {ctatext}
      </span>
      <img
        className={`${
          !card && "h-4 translate-x-8"
        } transition-[transform] duration-300 ${
          !card && "group-hover:translate-x-16"
        }`}
        src={color === "text-black" ? arrowBlack : arrowWhite}
      />
    </a>
  );
}
