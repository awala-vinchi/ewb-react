import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import { Clock, MapPin } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Rings } from "react-loader-spinner";

export default function SingleEvent() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  async function getEvent() {
    try {
      const query = `*[_type == "event" && slug.current == $slug][0]{
        title,
        body,
        day,
        month,
        time,
        venue,
        mainImage {
          asset -> {
            url
          }
        },
        flyer {
          asset -> {
            url
          }
        },
        isRecurring,
        dayOfWeek,
        recurrenceType,
        programDate
      }`;
      const eventData = await client.fetch(query, { slug });
      setEvent(eventData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    } finally {
      setLoading(false); // Stop loading when data fetch is complete
    }
  }

  useEffect(() => {
    getEvent();
  }, [slug]);

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


  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Event not found.</p>
      </div>
    );
  }

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
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
    return formattedDate || "";
  };

  return (
    <section className="py-12 w-full flex flex-col items-center bg-stone-100 text-gray-700 mt-10">
      {/* Header */}
      <div className="w-full max-w-5xl px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-wrap justify-center items-center text-sm text-gray-600 gap-2">
          <Clock className="w-4 h-4" />
          <span>{event.time || "Time not available"}</span>
          <MapPin className="w-4 h-4" />
          <span>{event.venue || "Venue not available"}</span>
        </div>
      </div>

      {/* Date Badge */}
      <div className="top-16 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-center sm:static sm:mt-8 mt-6">
        <p className="text-xl font-bold">
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
            ? formatDate(event.programDate).split(",")[1]?.trim() || ""
            : "Date not available"}
        </p>
      </div>

      {/* Event Image */}
      {event.mainImage?.asset?.url && (
        <div className="w-full max-w-3xl my-8 px-4">
          <img
            src={event.mainImage.asset.url}
            alt={event.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Event Description */}
      <div className="w-full max-w-3xl px-4">
        {event.body && (
          <PortableText value={event.body} components={components} />
        )}
      </div>

      {/* Flyer (Optional) */}
      {event.flyer?.asset?.url && (
        <div className="w-full max-w-3xl mt-12 px-4">
          <h2 className="text-2xl font-bold mb-4">Event Flyer</h2>
          <img
            src={event.flyer.asset.url}
            alt={`${event.title} Flyer`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
    </section>
  );
}

// Custom components for Portable Text
const components = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold my-6">{children}</h2>
    ),
    normal: ({ children }) => <p className="my-4 text-lg">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      <img
        src={value.asset.url}
        alt={value.alt || "Embedded Image"}
        className="my-6 rounded-lg shadow-md w-full"
      />
    ),
  },
};
