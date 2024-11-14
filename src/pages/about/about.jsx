import React from "react";

import Hero from "../about/components/donate";
import AboutContent from "../about/components/about-us"; // Renamed About to AboutContent to avoid conflict

export default function About() {
  // Renamed About to AboutPage
  return (
    <>
      <Hero />
      <AboutContent />
    </>
  );
}
