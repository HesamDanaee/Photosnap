export default function Burgur({
  active,
  handleClick,
}: {
  active: boolean;
  handleClick: () => void;
}) {
  return (
    <div
      className="div flex h-3 cursor-pointer flex-col items-center justify-between md:hidden"
      onClick={handleClick}
    >
      <span
        className={` h-0.5 w-8 origin-center bg-gray-700 transition-all duration-300  ${
          active ? "translate-y-[4px] rotate-45" : ""
        }`}
      ></span>
      <span
        className={` h-0.5 w-8 origin-center bg-gray-700 transition-all duration-300 ${
          active ? "-translate-y-[5px]  -rotate-45" : ""
        }`}
      ></span>
    </div>
  );
}
