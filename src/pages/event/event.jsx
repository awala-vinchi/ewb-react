import React from "react";
import Events from "../../pages/event/components/events"; 
import Hero from "../../pages/event/components/hero_event";

export default function EventPage() {
  // Renamed the component
  return (
    <>
      <Hero  />
      <Events />
    </>
  );
}
