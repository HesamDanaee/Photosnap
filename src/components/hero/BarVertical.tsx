export default function BarVertical({
  priceCard = false,
}: {
  priceCard?: boolean;
}) {
  return (
    <div
      className={`absolute left-0 top-1/2 h-[50%] w-4-8 -translate-y-1/2 bg-white bg-gradient-to-t from-[#ffc694] via-[#bc7198] 
      to-[#5776ff] sm-max:hidden
      ${priceCard && "top-0 left-0 h-[100%] lg:hidden sm-max:hidden"}
      `}
    ></div>
  );
}
