import logo from "./../assets/images/logo.svg";
import w_logo from "./../assets/images/logo-white.svg";
import { Link } from "react-router-dom";

export default function Icon({ footer }: { footer?: boolean }) {
  return (
    <Link to="/">
      <img
        className={`h-auto w-144-8 ${
          footer && "col-start-1 col-end-2 lg-max:col-span-1 lg-max:row-span-1"
        }`}
        src={footer ? w_logo : logo}
      />
    </Link>
  );
}
