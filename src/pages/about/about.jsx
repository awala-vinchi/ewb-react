import React from "react";

import Hero from "../about/components/donate";
import OnM from "../about/components/OnM";
import Page from "../about/components/page";
import Team from "../about/components/team";

export default function About() {
  // Renamed About to AboutPage
  return (
    <>
      <Hero />
      <Page />
      <OnM />
      <Team />
    </>
  );
}
