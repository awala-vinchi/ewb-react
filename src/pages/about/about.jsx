import React from "react";

import Hero from "./components/donate";
import OnM from "./components/OnM";
import Page from "./components/page";
import History from "./components/history";
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
      <History />
      <Impact />
      {/* <Partner /> */}
      {/* <Help /> */}
      <Team />
    </>
  );
}
