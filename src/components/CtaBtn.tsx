import arrowWhite from "./../assets/images/arrow-white.svg";
import arrowBlack from "./../assets/images/arrow-black.svg";

export default function CtaBtn({
  color,
  ctatext,
  card,
  footer,
}: {
  color?: string;
  ctatext: string;
  card: boolean;
  footer?: boolean;
}) {
  return (
    <a
      href="#"
      className={`group flex cursor-pointer flex-row items-center uppercase tracking-widest ${color}`}
    >
      <span
        className={`relative before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:skew-x-[90deg] ${
          color === "text-black" ? "before:bg-black" : "before:bg-slate-100"
        } before:transition-[transform] before:duration-300 hover:before:skew-x-0 sm-max:text-sm ${
          card ? "text-sm" : "lg:text-base sm-max:text-xs"
        }`}
      >
        {ctatext}
      </span>
      <img
        className={`${
          card ? "h-3 px-4" : "h-4 px-10"
        } transition-[padding] duration-300 ${
          card ? "group-hover:px-6" : "group-hover:px-14"
        }`}
        src={color === "text-black" ? arrowBlack : arrowWhite}
      />
    </a>
  );
}
