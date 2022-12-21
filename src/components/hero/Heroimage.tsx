export default function HeroImage({
  mobile,
  tablet,
  desktop,
}: {
  mobile: string;
  tablet: string;
  desktop: string;
}) {
  return (
    <div
      className={`h-full  bg-cover bg-center  bg-no-repeat sm:basis-[40%] sm-max:h-[45%] ${tablet} lg:basis-[35%] 2xl:basis-[70%] sm-max:order-1 sm-max:h-[35vh] sm-max:w-screen ${mobile} ${desktop}`}
    ></div>
  );
}
