import Hero from "../components/hero/Hero";
import Header from "../components/Header";
import useActive from "../customhooks/useActive";
import Burgur from "../components/Burgur";
import HeroText from "../components/hero/Herotext";
import HeroImage from "../components/hero/Heroimage";
import MobileNav from "../components/Mobilenav";
import FeatureContainer from "../components/card/Featurecontainer";
import FeatureCard from "../components/card/Featurecard";
import { featuresData2 } from "../data";
import BetaCard from "../components/card/BetaCard";
import Footer from "../components/Footer";

export default function Features() {
  const { active, handleActive } = useActive();
  return (
    <>
      <MobileNav active={active} />
      <Header
        children={<Burgur active={active} handleClick={handleActive} />}
      />
      <Hero cardOrder="flex-row">
        <HeroText
          title={"FEATURES"}
          text={
            "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          }
          bg={"bg-black"}
          color={"text-white"}
          bar={true}
          cta={false}
        />
        <HeroImage
          mobile={"sm-max:bg-features-bg-mobile"}
          tablet={"sm:bg-features-bg-tablet"}
          desktop={"lg:bg-features"}
        />
      </Hero>
      <FeatureContainer>
        {featuresData2.map(({ title, text, img }, index) => {
          return (
            <FeatureCard key={index} title={title} text={text} src={img} />
          );
        })}
      </FeatureContainer>
      <BetaCard />
      <Footer />
    </>
  );
}
