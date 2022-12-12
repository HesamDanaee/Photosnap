import CTA from "../../CTA";
import BarHorizontal from "../../hero/BarHorizontal";
import BarVertical from "../../hero/BarVertical";

export default function PricingCard({
  plan,
  text,
  price1,
  price2,
  pro = false,
  toggle = false,
}: {
  plan: string;
  text: string;
  price1: string;
  price2: string;
  pro: boolean;
  toggle: boolean;
}) {
  return (
    <div
      className={`relative flex h-[400px]  w-[300px] px-24-8 text-center  shadow-md transition-[box-shadow] first-letter:duration-300 hover:shadow-lg sm:grid sm:h-[270px] sm:w-[90%] sm:grid-cols-[50%_25%] sm:grid-rows-3 sm:items-center sm:justify-between sm:justify-items-start sm:text-left
      lg:flex lg:h-[450px] lg:w-[350px] lg:flex-col
       lg:py-64-8 lg:text-center sm-max:flex-col sm-max:items-center sm-max:justify-center md-max:grid-cols-[60%_25%] lg-max:p-32-8
       ${
         pro
           ? "bg-black text-white lg:h-[490px] lg-max:my-64-8"
           : "bg-gray-100 text-black"
       }
       `}
    >
      {pro && <BarVertical priceCard={true} />}
      {pro && <BarHorizontal priceCard={true} />}
      <h2 className="mb-8-8 text-2xl font-medium capitalize leading-relaxed sm:col-start-1 sm:col-end-2">
        {plan}
      </h2>
      <p className="col-end-2 my-32-8 text-sm font-light capitalize leading-relaxed tracking-wider opacity-60 sm:col-start-1 ">
        {text}
      </p>
      <h2 className="text-2xl font-bold tracking-wider sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:text-3xl">
        {toggle ? price1 : price2}
        <p className="font-light tracking-wide opacity-70 lg-max:text-right">
          per month
        </p>
      </h2>
      <CTA text="pick plan" mobile={true} pro={pro} priceCard={true} />
    </div>
  );
}
