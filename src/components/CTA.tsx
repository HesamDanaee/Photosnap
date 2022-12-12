export default function CTA({
  mobile,
  text,
  pro = false,
  priceCard = false,
}: {
  mobile?: boolean;
  text?: string;
  pro?: boolean;
  priceCard?: boolean;
}) {
  return (
    <a
      href="#"
      className={`duration-400 text-center ${
        mobile ? "my-5 w-90%" : ""
      } cursor-pointer bg-black py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white transition-colors  ease-linear hover:bg-gray-200 hover:text-black ${
        mobile ? "" : "md-max:hidden"
      }
      ${pro && "bg-white text-black hover:bg-gray-900 hover:text-white"}
      ${
        priceCard &&
        "max-w-[270px] tracking-[.3rem] sm:row-start-3 sm:row-end-4"
      }
      shadow-lg
      `}
    >
      {text || "get a invite"}
    </a>
  );
}
