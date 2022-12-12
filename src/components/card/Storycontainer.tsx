import HeroText from "../hero/Herotext";
import StoriesCard from "./Storycard";
import { cardsData, storiesData } from "../../data";

export default function StoryContainer({
  home = true,
  stories = false,
}: {
  home: boolean;
  stories: boolean;
}) {
  return (
    <section className="flex h-auto w-full flex-wrap">
      {home
        ? cardsData.map(({ title, text, img }, index) => {
            return (
              <StoriesCard
                bg_mobile={img.mobile}
                bg_tablet={img.tablet}
                key={index}
              >
                <HeroText
                  title={title}
                  text={text}
                  color="text-white"
                  ctatext="read story"
                  card={true}
                />
              </StoriesCard>
            );
          })
        : storiesData.map(({ title, text, img }, index) => {
            return (
              <StoriesCard
                bg_mobile={img.mobile}
                bg_tablet={img.tablet}
                key={index}
              >
                <HeroText
                  title={title}
                  text={text}
                  color="text-white"
                  ctatext="read story"
                  card={true}
                />
              </StoriesCard>
            );
          })}
    </section>
  );
}
