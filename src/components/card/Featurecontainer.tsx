import { ReactNode } from "react";

export default function FeatureContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="mx-auto flex h-auto w-full flex-row flex-wrap items-center justify-center py-64-8 md:py-88-8  lg:max-w-[70%] lg:justify-around md-max:flex-col">
      {children}
    </section>
  );
}
