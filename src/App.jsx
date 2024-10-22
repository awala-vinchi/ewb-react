import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Event from "./pages/event/event";
import Blog from "./pages/blog/blog";
import Projects from "./pages/projects/projects";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import NotFound from "./components/not-found";
import SingleBlogPost from "./pages/blog/single-blog/single-blog";
import SingleEvent from "./pages/event/single-event/single-event";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:slug" element={<SingleEvent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
