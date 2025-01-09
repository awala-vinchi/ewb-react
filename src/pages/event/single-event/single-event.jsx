import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import { Clock, MapPin } from "lucide-react";
import { PortableText } from "@portabletext/react";

export default function SingleEvent() {
  const { slug } = useParams(); // Get the slug from the URL
  const [event, setEvent] = useState(null);

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
        }
      }`;
      const eventData = await client.fetch(query, { slug });
      setEvent(eventData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  }

  useEffect(() => {
    getEvent();
  }, [slug]);

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading event details...</p>
      </div>
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
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
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

  return (
    <section className="py-16 w-full flex flex-col items-center bg-stone-100 text-gray-700">
      {/* Header */}
      <div className="w-full max-w-5xl p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex justify-center items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{event.time || "Time not available"}</span>
          <MapPin className="w-4 h-4 mx-2" />
          <span>{event.venue || "Venue not available"}</span>
        </div>
      </div>

      {/* Event Image */}
      {event.mainImage?.asset?.url && (
        <div className="w-full max-w-3xl my-8">
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
        <div className="w-full max-w-3xl mt-12">
          <h2 className="text-2xl font-bold mb-4">Event Flyer</h2>
          <img
            src={event.flyer.asset.url}
            alt={`${event.title} Flyer`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Date Badge */}
      <div className="absolute top-16 right-16 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
        <p className="text-2xl font-bold">{event.day || "N/A"}</p>
        <p className="text-lg">{event.month || "N/A"}</p>
      </div>
    </section>
  );
}
