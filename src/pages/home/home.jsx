import Hero from "../../pages/home/components/hero"
import AboutUs from "../../pages/home/components/about-us";
import OnM from "../../pages/home/components/OnM";
import CallToAction from "../../pages/home/components/call-to-action";
import Projects from "../../pages/home/components/project";
import Partner from "../../pages/home/components/partner";
import News from "../../pages/home/components/news";
import Events  from "../../pages/home/components/events";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Partner />
      <OnM />
      <CallToAction />
      <Projects />
      <Events />
      <News />

      
    </>
  );
}
