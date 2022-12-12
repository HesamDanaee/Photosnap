import HeroText from "./hero/Herotext";

export default function StoriesHero() {
  return (
    <section className="relative flex w-full items-center bg-moon-of-appalacia bg-cover bg-center bg-no-repeat after:absolute after:top-0 after:left-0 after:z-10 after:h-full after:w-full sm:h-[650px] lg:h-[650px] sm-max:h-[100vh] sm-max:items-end sm-max:bg-[length:100vw_50vh] sm-max:bg-top">
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

// sm:after:bg-gradient-to-ro
// from-[hsla(0,0%,0%,0)]
// to-[rgba(255,255,255,0)]
