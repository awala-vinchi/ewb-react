import { useParams } from "react-router-dom";

export default function SingleEvent() {
  const { slug } = useParams();
  return <div>Single Event - {slug} </div>;
}
