import { pricingData } from "../../../data";
import PricingCard from "./PricingCard";
import useActive from "../../../customhooks/useActive";
import PriceToggle from "./PriceToggle";

export default function PricingContainer() {
  const { active, handleActive } = useActive();
  return (
    <section className=" flex h-auto w-full flex-col items-center justify-center py-64-8  ">
      <PriceToggle toggle={active} handleClick={handleActive} />
      <div
        className="mx-auto flex h-full w-full max-w-[1200px] flex-col
items-center justify-between lg:flex-row lg:justify-around"
      >
        {pricingData.map(({ plan, text, price1, price2 }, index) => {
          return (
            <PricingCard
              plan={plan}
              text={text}
              price1={price1}
              price2={price2}
              pro={index === 1}
              key={index}
              toggle={active}
            />
          );
        })}
      </div>
    </section>
  );
}
