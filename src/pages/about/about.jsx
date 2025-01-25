import React from "react";

import Hero from "./components/donate";
import OnM from "./components/OnM";
import Page from "./components/page";
import Histroy from "./components/history";
import Team from "./components/team";
import Impact from "../about/components/impact";
import Help from "../about/components/help";


export default function About() {
  // Renamed About to AboutPage
  return (
    <>
      <Hero />
      <Page />
      <OnM />
      <Histroy />
      <Impact />
      {/* <Partner /> */}
      {/* <Help /> */}
      <Team />
    </>
  );
}
