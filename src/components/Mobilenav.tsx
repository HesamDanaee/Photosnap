import Navbar from "./Nav";
import CTA from "./CTA";

export default function MobileNav({ active }: { active: boolean }) {
  return (
    <div
      className={`absolute flex flex-col items-center md:hidden  ${
        active ? "top-[8vh] md:top-[10vh]" : "top-[-280px]"
      } left-0 z-10 h-[280px] w-screen bg-white transition-[top] duration-500 ease-[cubic-bezier(0.65,0.05,0.36,1)]`}
    >
      <Navbar mobile={true} />
      <div className="my-16-8 h-px w-90% bg-gray-600"></div>
      <CTA mobile={true} />
    </div>
  );
}
