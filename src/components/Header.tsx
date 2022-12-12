import { ReactNode } from "react";
import Navbar from "./Nav";
import Icon from "./Icon";
import CTA from "./CTA";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="z-20 flex h-[8vh] w-full flex-row items-center justify-between px-8">
      <Icon />
      <Navbar />
      <CTA />
      {children}
    </header>
  );
}
