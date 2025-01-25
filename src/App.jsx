import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Events from "./pages/event/event";
import Blog from "./pages/blog/blog";
import Projects from "./pages/projects/projects";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import NotFound from "./components/not-found";
import SingleBlogPost from "./pages/blog/singleblogpage/singleblog";
import SingleEvent from "./pages/event/single-event/single-event";
import SingleProject from "./pages/projects/single-project/single-project";
import Contact from "./pages/contact/contact";
import Membership from "./pages/contact/components/membership";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Events />} />
        <Route path="/events/:slug" element={<SingleEvent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlogPost />} />{" "}
        {/* Ensure slug param is passed */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<SingleProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all for undefined routes */}
        <Route path="/membership" element={<Membership />} /> {/* Example of a nested route */}
      </Routes>
      <Footer />
    </>
  );
}
