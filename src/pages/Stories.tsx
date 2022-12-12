import useActive from "../customhooks/useActive";
import StoryContainer from "../components/card/Storycontainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Burgur from "../components/Burgur";
import StoriesHero from "../components/Storieshero";
import MobileNav from "../components/Mobilenav";
export default function Stories() {
  const { active, handleActive } = useActive();
  return (
    <>
      <MobileNav active={active} />
      <Header
        children={<Burgur active={active} handleClick={handleActive} />}
      />
      <StoriesHero />
      <StoryContainer home={false} stories={true} />
      <Footer />
    </>
  );
}
