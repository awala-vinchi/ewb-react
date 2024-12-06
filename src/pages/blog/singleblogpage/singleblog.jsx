import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import BlockContent from "@sanity/block-content-to-react";

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
              <div>
                <BlockContent
                  blocks={post.body}
                  projectId="your-project-id" // Replace with your Sanity project ID
                  dataset="your-dataset" // Replace with your dataset name
                />
              </div>
            )}
          </div>

          {/* Social Actions */}
          <div className="mt-6 flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center"
              aria-label="Like this post"
            >
              <Heart className="mr-2" />
              Like
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center"
              aria-label="Comment on this post"
            >
              <MessageCircle className="mr-2" />
              Comment
            </button>
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center"
              aria-label="Share this post"
            >
              <Share2 className="mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
