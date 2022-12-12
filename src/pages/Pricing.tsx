import Hero from "../components/hero/Hero";
import Header from "../components/Header";
import useActive from "../customhooks/useActive";
import Burgur from "../components/Burgur";
import HeroText from "../components/hero/Herotext";
import HeroImage from "../components/hero/Heroimage";
import MobileNav from "../components/Mobilenav";
import Footer from "../components/Footer";
import BetaCard from "../components/card/BetaCard";
import PricingContainer from "../components/card/pricing/PricingContainer";
import FeaturesTableContainer from "../components/table/FeatuesTableContainer";

export default function Pricing() {
  const { active, handleActive } = useActive();
  return (
    <>
      <MobileNav active={active} />
      <Header
        children={<Burgur active={active} handleClick={handleActive} />}
      />
      <Hero cardOrder="flex-row">
        <HeroText
          title={"PRICING"}
          text={
            "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          }
          bg={"bg-black"}
          color={"text-white"}
          bar={true}
          cta={false}
        />
        <HeroImage
          mobile={"sm-max:bg-pricing-mobile"}
          tablet={"sm:bg-pricing-tablet"}
          desktop={"lg:bg-pricing"}
        />
      </Hero>
      <PricingContainer />
      <FeaturesTableContainer />
      <BetaCard />
      <Footer />
    </>
  );
}
