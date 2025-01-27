import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function Blog() {
  const [postData, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getPost() {
    try {
      const data = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc){
          title,
          description,
          subHeading,
          slug { current },
          mainImage { asset-> { url }, alt },
          publishedAt
        }`
      );
      setPost(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Error fetching posts. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

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
        <h2 className="text-3xl font-bold">OUR LATEST NEWS</h2>
        <p className="text-md">Blog Posts</p>
      </div>

      {isLoading && <p>Loading posts...</p>}

      {error && (
        <div className="text-center text-red-500 font-semibold">
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && postData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {postData.slice(0, 3).map((post) => (
            <article key={post.slug.current} className="flex justify-center">
              <Link
                to={`/blog/${post.slug.current}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
                  {/* Image */}
                  <img
                    src={
                      post.mainImage?.asset?.url ||
                      "https://via.placeholder.com/300"
                    }
                    alt={post.mainImage?.alt || `Image for ${post.title}`}
                    className="w-full h-40 bg-gray-200 rounded-md mb-4"
                  />

                  {/* Headline and Subheadline */}
                  <h2 className="text-2xl font-bold mb-1">
                    {post.title || "Untitled"}
                  </h2>
                  <h3 className="text-lg text-gray-500 mb-2">
                    {post.subHeading || "No subheading specified"}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {post.description || "No description available."}
                  </p>

                  {/* Buttons */}
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-gray-300 text-base rounded-lg">
                      Read
                    </button>
                    <button
                      aria-label="Like this post"
                      className="px-4 py-2 bg-gray-800 text-base text-white rounded-lg"
                    >
                      <Heart />
                    </button>
                    <button
                      aria-label="Comment on this post"
                      className="px-4 py-2 bg-gray-800 text-base text-white rounded-lg"
                    >
                      <MessageCircle />
                    </button>
                    <button
                      aria-label="Share this post"
                      className="px-4 py-2 bg-gray-800 text-base text-white rounded-lg"
                    >
                      <Share2 />
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
          <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600 mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            All Posts
          </button>
        </Link>
      </div>
    </section>
  );
}
