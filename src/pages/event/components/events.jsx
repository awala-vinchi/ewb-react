import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";
import { Clock, MapPin } from "lucide-react";

export default function EventCard() {
  const [eventData, setEvent] = useState(null);

  async function getEvent() {
    try {
      const data = await client.fetch(`*[_type == "event"]{
          title,
          day,
          month,
          time,
          venue,
          description,
          slug {
            current
          },
          mainImage {
            asset -> {
              url
            }
          }
        }`);
      setEvent(data);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  }

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <section className="py-16 w-full flex flex-col items-center justify-center text-neutral-600 bg-stone-100">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {eventData &&
          eventData.map((event, index) => (
            <article key={event.slug.current}>
              <Link to={`/events/${event.slug.current}`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg group bg-gray-900 text-white">
                  {/* Background Image */}
                  <img
                    src={
                      event.mainImage?.asset?.url ||
                      "https://via.placeholder.com/300"
                    }
                    alt={event.title || "Event Image"}
                    className="h-48 w-full object-cover transition-transform duration-500 "
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-md shadow-lg text-center">
                    <p className="text-lg font-bold">{event.day || "N/A"}</p>
                    <p className="text-sm">{event.month || "N/A"}</p>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {event.title || "Event Title"}
                    </h3>
                    <div className="flex items-center text-sm text-gray-300 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{event.time || "Time not available"}</span>
                      <MapPin className="w-4 h-4 mx-2" />
                      <span>{event.venue || "Venue not available"}</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      {event.description || "No description available."}
                    </p>
                    <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
      </div>
    </section>
  );
}
