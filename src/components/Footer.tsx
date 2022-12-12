import Icon from "./Icon";
import Navbar from "./Nav";
import CtaBtn from "./CtaBtn";
import Socials from "./Socials";
import Coptyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="flex h-[300px] w-full flex-row items-center justify-around bg-black lg:py-32-8 md-max:h-[500px] md-max:flex-col md-max:justify-between">
      {/* Left Section */}
      <section className="lg:content lg-max grid h-[70%] w-[40%] grid-cols-2 grid-rows-2 flex-row items-center justify-between sm:w-[50%] md:justify-items-start md-max:h-[80%] md-max:w-[90%] md-max:grid-rows-5 md-max:justify-items-center lg-max:w-[50%] lg-max:grid-cols-1">
        {/* Left box */}

        <Icon footer={true} />
        <Socials />

        <Navbar footer={true} />
      </section>
      {/* Right Section */}
      <section className="flex h-[50%] w-[30%] flex-col items-end justify-between md-max:h-[30%] md-max:w-[90%] md-max:items-center md-max:py-32-8">
        <CtaBtn
          color="text-white"
          card={true}
          ctatext="get an invite"
          footer={true}
        />
        <Coptyright />
      </section>
    </footer>
  );
}
