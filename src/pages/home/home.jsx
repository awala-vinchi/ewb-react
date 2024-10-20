import Img1 from "../../assets/images/1.jpg";
import Pjt1 from "../../assets/images/h2o.jpg";
import Pjt2 from "../../assets/images/ir.jpg";
import Pjt3 from "../../assets/images/bg.jpg";
import Pjt4 from "../../assets/images/rw.jpg";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Water Distribution System",
    description: "Borehole Project for the University of Texas at Austin",
    img: Pjt1,
  },
  {
    id: 2,
    title: "Rain Water Catchment/ Irrigation",
    description: "Borehole Project for the University of Texas at Austin",
    img: Pjt2,
  },
  {
    id: 3,
    title: "Bridge Construction",
    description: "Borehole Project for the University of Texas at Austin",
    img: Pjt3,
  },
  {
    id: 4,
    title: "Kitchen Stove Construction",
    description: "Borehole Project for the University of Texas at Austin",
    img: Pjt4,
  },
];

const objectives = [
  {
    id: 1,
    icon: "🌍",
    title: "Community Empowerment",
    description:
      "Actively seek opportunities to engage in projects that build the capacities and empower the most underserved communities in Ghana to meet their basic human needs.",
  },
  {
    id: 2,
    icon: "📚",
    title: "Knowledge Sharing",
    description:
      "Provide students with technical and cultural knowledge to effectively approach and solve world problems on a community-based level.",
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Engineering Skills",
    description:
      "Develop skill set in engineering students to prepare them to be of service to humanity.",
  },
  {
    id: 4,
    icon: "🤝",
    title: "Integrity & Responsibility",
    description:
      "Cultivate a sense of volunteerism, integrity, and responsibility in KNUST students.",
  },
  {
    id: 5,
    icon: "🌐",
    title: "Building Relationships",
    description:
      "Develop and foster relationships between EWB-Ghana KNUST, professional mentors, and disadvantaged communities.",
  },
];

const socials = [
  {
    id: 1,
    icon: <Facebook size={22} />,
    link: "https://www.facebook.com/ewbknust",
  },
  {
    id: 2,
    icon: <Instagram size={22} />,
    link: "https://www.instagram.com/ewbknust/",
  },
  {
    id: 3,
    icon: <Twitter size={22} />,
    link: "https://twitter.com/ewbknust",
  },
  {
    id: 4,
    icon: <Linkedin size={22} />,
    link: "https://www.linkedin.com/company/ewbknust",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero w-full h-screen bg-[url('/src/assets/images/hero.jpg')] bg-cover bg-center relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,20,68,0.92)] to-[rgba(10,33,58,0.57)]">
          {/* Hero message aligned to the left */}
          <div className="hero_message flex flex-col justify-center pt-24 px-14 items-start text-white h-full">
            <h1 className="text-7xl font-bold w-[38rem]">
              Welcome to EWB - KNUST
            </h1>
            <p className=" text-3xl">Impacting Lives, Changing Communities!</p>

            <div className="mt-6">
              <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600  mt-4 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/**/}
      <section className="intro w-full py-16 bg-stone-100 flex items-center justify-center gap-10">
        <div className="w-1/3 h-70 shadow-lg">
          <img
            src={Img1}
            alt="img1"
            className="w-full h-full object-cover rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="w-1/2 min-h-[500px] text-neutral-600 text-justify  flex flex-col justify-center items-start z-22 relative -mt-10">
          <p className="mt-4 text-md">
            Engineers Without Borders KNUST builds a better world through
            engineering projects that empower communities to meet their basic
            human needs. Our highly skilled volunteers work with communities to
            find appropriate solutions for their infrastructure needs.
            <br />
            <br />
            Invest your time where it will have the most impact. By lending your
            passion and expertise, you help us build strong, sustainable
            communities around the world!
            <br />
            <br />
            We're on the frontlines and sharing our expertise to innovate,
            respond, and prepare communities to withstand COVID-19 and future
            shocks. Join us in building resilient communities.
          </p>

          <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600  mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            Join Us
          </button>
        </div>
      </section>

      {/**/}
      <section className="mission-n-objectives w-full py-16 bg-white items-center justify-center space-y-10">
        <div className="mission w-1/2  bg-pink-100 m-auto p-5 mt-16 text-neutral-600 text-justify  flex flex-col justify-center items-center z-20 rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out relative">
          <h2 className="text-3xl font-bold">OUR MISSION</h2>
          <p className="mt-4 text-md">
            The mission of EWB-KNUST shall be to work with disadvantaged
            communities in Ghana to improve their quality of life through
            education and the implementation of practical, environmental and
            economically sustainable engineering projects.
          </p>
        </div>

        <div className="objectives text-neutral-600 text-justify  flex flex-col justify-center items-center z-20 p-16">
          <div>
            <h2 className="text-3xl font-bold">OUR OBJECTIVES</h2>
            <p className="text-md ml-5"> Our Strategic Priorities are;</p>
          </div>

          <div className="grid grid-cols-2 gap-4 p-5">
            {/*Row 1 - 2 Colums */}

            {/* Card 1 */}
            {objectives.map((item) => (
              <div
                className="col-span-1 bg-pink-100 text-neutral-600 rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out  p-6   flex flex-col items-center text-center"
                key={item.id}
              >
                <span className="text-3xl">{item.icon}</span>{" "}
                {/* Globe with Meridians */}
                <h3 className="text-lg font-bold mt-4">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/**/}
      <section className="projects w-full py-24 bg-stone-100 flex flex-col items-center justify-center">
        <div className=" text-neutral-600 text-justify justify-center items-center z-20 p-10">
          <h2 className="text-3xl font-bold">POPULAR PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/*project*/}
          {projects.map((item) => (
            <div
              className=" p-2 border border-neutral-300 hover:border-blue-500 space-y-2 rounded-lg h-72 W-60"
              key={item.id}
            >
              <div className="relative group h-60 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item?.img}
                  alt={`${item.title}'s image`}
                  className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm  h-full w-full"
                />
                {/* Overlay with hidden text */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center px-6">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="">{item.description}</p>
                  </div>
                </div>
              </div>
              {/* Text under the card */}
              <div className="text-center text-blue-500 font-semibold text-wrap">
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600  mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            All Projects
          </button>
        </div>
      </section>

      {/**/}
      <section className="call-to-action w-full pb-16  flex flex-col items-center justify-center">
        <div className="w-full flex-1 py-36 bg-blue-800">
          <h1 className="container px-24 text-center text-white text-5xl font-extrabold">
            Your little support can give a child in a community a livelihood.
            Let's contribute!
          </h1>
        </div>

        <div className="w-full flex flex-1 py-16 bg-teal-400 justify-between relative">
          <div className=" flex flex-col items-center justify-center w-1/3 text-wrap m">
            <h2 className="text-center text-white text-3xl font-bold p-6">
              Are you passionate about the livelihood of people? then...
            </h2>
            <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-800  mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
              Get Involved
            </button>
          </div>

          {/* Overlapping div */}
          <div className="absolute flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 -top-16  w-3/4 md:w-1/3 h-[30rem] bg-teal-400 shadow-lg rounded-lg z-10 transition-transform duration-300 hover:scale-105">
            {/* Content inside the overlapping div */}
            <h2 className="text-center text-white text-3xl font-bold px-6">
              Sponsor an entire trending project
            </h2>
            <p className="text-center text-white mt-5">
              For GH₵ 10,000 or more you can fully fund a water project for a
              Community. 100% funds clean water projects. 663 million people
              drink..
            </p>
            <button className="bg-blue-500 w-[15rem] text-white hover:bg-blue-800  mt-10 px-4 py-2 rounded-md  border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
              BECOME A SPONSOR
            </button>
          </div>

          <div className=" socials flex flex-col items-center justify-center w-1/3 text-wrap">
            <h2 className="text-center text-white text-3xl font-bold p-6">
              Connect with us on socials
            </h2>

            <div className="flex gap-5">
              {socials.map((item) => (
                <div
                  className=" border-0 rounded-full bg- p-3 bg-blue-500   text-white hover:bg-blue-800  mt-10  hover:border-blue-500 hover:shadow-md transition-all duration-300 "
                  key={item.id}
                >
                  <a href={item.link}>{item.icon}</a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/**/}
      <section className="w-full h-screen"></section>
    </>
  );
}
