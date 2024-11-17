import Hero from "../../pages/home/components/hero"
import AboutUs from "../../pages/home/components/about";

import CallToAction from "../../pages/home/components/call-to-action";
import Projects from "../../pages/home/components/project";
import Partner from "../../pages/home/components/partner";
import News from "../../pages/home/components/news";
import Events  from "../../pages/home/components/events";
import Donate from "../../pages/home/components/donate";



export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Partner />
      <Projects />
      <CallToAction />
      <Donate />
      <Events />
      <News />
    </>
  );
}
