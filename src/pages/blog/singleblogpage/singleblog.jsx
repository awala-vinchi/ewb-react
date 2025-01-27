import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { PortableText } from "@portabletext/react";

export default function SinglePost() {
  const { slug } = useParams(); // Get the post slug from URL
  const [post, setPost] = useState(null);

  // Fetch single post data
  async function fetchPost() {
    try {
      const data = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          subHeading,
          description,
          body,
          author -> { name },
          mainImage {
            asset -> {
              url
            },
            alt
          },
          categories[] -> { title }
        }`,
        { slug }
      );
      setPost(data);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <section className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Loading post...</p>
      </section>
    );
  }

  // Custom components for Portable Text
  const components = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold mb-4">{children}</h2>
      ),
      normal: ({ children }) => (
        <p className="text-lg my-4 text-gray-700">{children}</p>
      ),
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
    <section className="py-16 px-4 w-full bg-stone-100 text-neutral-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Main Image */}
        <img
          src={post.mainImage?.asset?.url || "https://via.placeholder.com/800"}
          alt={post.mainImage?.alt || "Post Image"}
          className="w-full h-64 object-cover"
        />

        {/* Post Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <h2 className="text-xl text-gray-600 mt-2">{post.subHeading}</h2>

          {/* Metadata */}
          <div className="flex items-center text-sm text-gray-500 my-4">
            {post.author?.name && <p className="mr-4">By {post.author.name}</p>}
            {post.categories &&
              post.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 rounded-full text-sm text-gray-700 mr-2"
                >
                  {category.title}
                </span>
              ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 my-4">{post.description}</p>

          {/* Body */}
          <div className="mt-6">
            {post.body && (
              <PortableText value={post.body} components={components} />
            )}
          </div>

          
        </div>
      </div>
    </section>
  );
}
