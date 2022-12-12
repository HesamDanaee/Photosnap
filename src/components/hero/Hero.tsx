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
      className={`flex w-full sm:h-[55vh] sm-max:h-[90vh] ${cardOrder} relative flex-wrap items-center sm:flex-nowrap`}
    >
      {children}
    </section>
  );
}
