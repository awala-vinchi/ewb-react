import Hero from "../../pages/home/components/hero"
import AboutUs from "../../pages/home/components/about";

import CallToAction from "../../pages/home/components/call-to-action";
import Projects from "../../pages/home/components/project";
import Partner from "../../pages/home/components/partner";
import News from "../../pages/home/components/news";
import Events  from "../../pages/home/components/events";
import Donate from "../../pages/home/components/donate";
import Activities from "../../pages/home/components/activities";



export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Activities />
      <Partner />
      <Projects />
      <CallToAction />
      <Donate />
      <Events />
      <News />
    </>
  );
}
