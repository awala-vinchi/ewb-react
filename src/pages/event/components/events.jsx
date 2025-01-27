import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";
import { Clock, MapPin } from "lucide-react";
import { Rings } from "react-loader-spinner";

export default function EventCard() {
  const [eventData, setEvent] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  async function getEvent() {
    try {
      const data = await client.fetch(
        `*[_type == "event" && (programDate >= now() || isRecurring == true)] {
          title,
          programDate,
          time,
          venue,
          description,
          isRecurring,
          recurrenceType,
          dayOfWeek,
          slug {
            current
          },
          mainImage {
            asset -> {
              url
            }
          }
        }`
      );

      // Sort events: Recurring events first, then by nearest programDate
      const sortedData = data.sort((a, b) => {
        if (a.isRecurring && !b.isRecurring) return -1;
        if (!a.isRecurring && b.isRecurring) return 1;

        const dateA = new Date(a.programDate);
        const dateB = new Date(b.programDate);
        return dateA - dateB;
      });

      setEvent(sortedData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    } finally {
      setLoading(false); // Stop loading after data is fetched
    }
  }

  useEffect(() => {
    getEvent();
  }, []);

  const getDayOfWeek = (dayIndex) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex] || "Unknown Day";
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
  };

   if (loading) {
     return (
       <div className="flex items-center justify-center h-screen">
         <Rings
           height="100"
           width="100"
           color="blue"
           ariaLabel="loading-indicator"
         />
       </div>
     );
   }

  return (
    <section className="py-16 w-full flex flex-col items-center justify-center text-neutral-600 bg-stone-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="text-md text-gray-500">Don't miss out on our events!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {eventData && eventData.length > 0 ? (
          eventData.map((event) => (
            <article key={event.slug.current}>
              <Link to={`/events/${event.slug.current}`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg group bg-gray-900 text-white">
                  <img
                    src={
                      event.mainImage?.asset?.url ||
                      "https://via.placeholder.com/300"
                    }
                    alt={event.title || "Event Image"}
                    className="h-48 w-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-md shadow-lg text-center">
                    <p className="text-lg font-bold">
                      {event.isRecurring
                        ? getDayOfWeek(event.dayOfWeek)
                        : event.programDate
                        ? formatDate(event.programDate).split(",")[0]
                        : "Date not available"}
                    </p>
                    <p className="text-sm">
                      {event.isRecurring
                        ? event.recurrenceType.charAt(0).toUpperCase() +
                          event.recurrenceType.slice(1)
                        : event.programDate
                        ? formatDate(event.programDate).split(",")[1]?.trim()
                        : "Date not available"}
                    </p>
                  </div>
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
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>No upcoming events at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
