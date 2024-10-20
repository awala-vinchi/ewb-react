import { useParams } from "react-router-dom";

export default function SingleBlogPost() {
  const { slug } = useParams();
  return <div>BlogDetails - {slug} </div>;
}
