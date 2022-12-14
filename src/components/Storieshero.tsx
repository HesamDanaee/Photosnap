import HeroText from "./hero/Herotext";

export default function StoriesHero() {
  return (
    <section className="relative flex w-full items-center bg-cover bg-center bg-no-repeat after:absolute after:top-0 after:left-0 after:h-[40%] after:w-full after:bg-[url('/src/assets/images/new/webp-format/moon-of-appalacia-mobile.webp')] after:bg-cover after:bg-center after:bg-no-repeat sm:h-[650px] sm:bg-[url('/src/assets/images/new/webp-format/moon-of-appalacia-tablet.webp')] sm:after:hidden lg:h-[650px] lg:bg-[url('/src/assets/images/new/webp-format/moon-of-appalacia-desktop.webp')] sm-max:h-[135vh] sm-max:items-end sm-max:bg-none sm-max:bg-top">
      <HeroText
        color="text-white"
        ctatext="read the story"
        text={`The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.`}
        title="HAZY FULL MOON OF APPALACHIA"
        stories={true}
      />
    </section>
  );
}
