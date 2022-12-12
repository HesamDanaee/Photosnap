import FeaturesTable from "./FeaturesTable";

export default function FeaturesTableContainer() {
  return (
    <section className="my-64-8 flex h-auto w-full flex-col items-center justify-center">
      <h1 className="font-semibold tracking-widest text-black">COMPARE</h1>
      <FeaturesTable />
    </section>
  );
}
