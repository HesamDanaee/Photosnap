import useActive from "../customhooks/useActive";
import Header from "../components/Header";
import Body from "../components/Body";
import MobileNav from "../components/Mobilenav";
import Burgur from "../components/Burgur";
import Footer from "../components/Footer";

export default function Home() {
  const { active, handleActive } = useActive();
  return (
    <>
      <MobileNav active={active} />
      <Header
        children={<Burgur active={active} handleClick={handleActive} />}
      />
      <Body />
      <Footer />
    </>
  );
}
