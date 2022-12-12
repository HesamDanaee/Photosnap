import { Link } from "react-router-dom";

export default function Navbar({
  mobile,
  footer,
}: {
  mobile?: boolean;
  footer?: boolean;
}) {
  return (
    <nav
      className={`flex font-semibold ${
        footer
          ? "col-start-2 col-end-3 row-start-1 row-end-3 items-center font-medium md:flex-row md:items-start lg:row-start-1 lg:row-end-3 lg:flex-col lg:items-start md-max:flex-col md-max:justify-center lg-max:col-span-1 lg-max:row-start-2 lg-max:row-end-5 lg-max:flex lg-max:justify-between"
          : ""
      } ${
        mobile ? "z-0 h-full flex-col items-center  justify-center" : "flex-row"
      } ${mobile ? "" : "md-max:hidden"} ${
        footer
          ? "h-[80%] flex-col justify-between text-white lg-max:w-[80%]"
          : "text-black"
      }`}
    >
      {footer && (
        <Link
          to="/"
          className="relative cursor-pointer text-sm uppercase tracking-widest transition duration-300 ease-in-out before:absolute
      before:bottom-0
      before:left-0 before:h-px before:w-full before:skew-x-[90deg] before:bg-black before:transition-[transform] before:duration-300 hover:text-gray-600 hover:before:skew-x-0"
        >
          Home
        </Link>
      )}
      <Link
        to="/stories"
        className={`relative cursor-pointer text-sm uppercase tracking-widest transition duration-300  ease-in-out before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:skew-x-[90deg] before:bg-black before:transition-[transform] before:duration-300 hover:text-gray-600 hover:before:skew-x-0`}
      >
        Stories
      </Link>
      <Link
        to="/features"
        className={`${mobile ? "my-10" : "mx-14"}
          relative cursor-pointer text-sm uppercase tracking-widest transition duration-300 ease-in-out before:absolute
        before:bottom-0
        before:left-0 before:h-px before:w-full before:skew-x-[90deg] before:bg-black before:transition-[transform] before:duration-300 hover:text-gray-600 hover:before:skew-x-0 ${
          footer && "mx-0"
        }`}
      >
        Features
      </Link>
      <Link
        to="/pricing"
        className="relative cursor-pointer text-sm uppercase tracking-widest transition duration-300 ease-in-out before:absolute
        before:bottom-0
        before:left-0 before:h-px before:w-full before:skew-x-[90deg] before:bg-black before:transition-[transform] before:duration-300 hover:text-gray-600 hover:before:skew-x-0"
      >
        Pricing
      </Link>
    </nav>
  );
}
