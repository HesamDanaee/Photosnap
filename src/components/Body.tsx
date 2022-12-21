import Hero from "./hero/Hero";
import HeroText from "./hero/Herotext";
import HeroImage from "./hero/Heroimage";
import StoryContainer from "./card/Storycontainer";
import FeatureCard from "./card/Featurecard";
import FeatureContainer from "./card/Featurecontainer";
import { heroData, featuresData } from "../data";
export default function Body() {
  return (
    <main className="z-0 flex h-auto w-full flex-col ">
      {/* Hero One */}
      {heroData.map(({ title, text, cta, order, bg, color, img }, index) => {
        const { mobile, tablet, desktop } = img;
        return (
          <>
            <Hero key={`Hero-${index}`} cardOrder={order}>
              <HeroText
                title={title}
                text={text}
                ctatext={cta}
                bg={bg}
                color={color}
                bar={index === 0 && true}
                key={`text-${index}`}
              />
              <HeroImage
                key={`image-${index}`}
                mobile={mobile}
                tablet={tablet}
                desktop={desktop}
              />
            </Hero>
          </>
        );
      })}
      <StoryContainer stories={false} home={true} />
      <FeatureContainer>
        {featuresData.map(({ title, text, img }, index) => {
          return (
            <FeatureCard
              key={`FeatureCard_${index}`}
              title={title}
              text={text}
              src={img}
            />
          );
        })}
      </FeatureContainer>
    </main>
  );
}
