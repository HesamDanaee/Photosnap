export default function PriceToggle({
  toggle,
  handleClick,
}: {
  toggle: boolean;
  handleClick: () => void;
}) {
  return (
    <div
      className="text-balck relative my-48-8 flex max-w-[300px] cursor-pointer flex-row justify-between font-medium"
      onClick={handleClick}
    >
      <h3
        className={`${
          !toggle && "opacity-50"
        } text-lg  transition duration-300`}
      >
        Monthly
      </h3>
      <span className="relative mx-16-8 block h-[31px] w-[60px] rounded-2xl  bg-gray-200 ">
        <span
          className={`top-[8%] transition-all duration-300 ${
            toggle ? "left-[5px]" : "left-[30px]"
          } absolute h-[25px] w-[25px] rounded-[50%] bg-black `}
        ></span>
      </span>
      <h3
        className={`${toggle && "opacity-50"} text-lg  transition duration-500`}
      >
        Yearly
      </h3>
    </div>
  );
}
