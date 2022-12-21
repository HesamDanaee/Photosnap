import { ReactNode } from "react";

export default function Hero({
  children,
  cardOrder,
}: {
  children: ReactNode;
  cardOrder: string;
}) {
  return (
    <section
      className={`flex w-full sm:h-[60vh] sm-max:h-auto ${cardOrder} relative flex-wrap items-center sm:flex-nowrap`}
    >
      {children}
    </section>
  );
}
