export default function BarHorizontal({
  priceCard = false,
}: {
  priceCard?: boolean;
}) {
  return (
    <div
      className={`
      absolute left-[15%] top-0 h-4-8 w-[25%] bg-white bg-gradient-to-r from-[#ffc694] via-[#bc7198] to-[#5776ff] 
      sm:hidden
      ${
        priceCard &&
        "top-0 left-0 w-[100%] -translate-x-[15%] sm:hidden lg:block "
      }
      `}
    ></div>
  );
}
