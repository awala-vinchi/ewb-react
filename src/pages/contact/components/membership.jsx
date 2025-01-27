import React, { useState } from "react";
import { MapPin, AtSign, PhoneCall } from "lucide-react";



export default function FormPage () {
  const [surname, setSurname] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [program, setProgram] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [campusResidence, setCampusResidence] = useState("");
  const [project, setProject] = useState("");
  const [interest, setInterest] = useState("");
  const [volunteeringPriority, setVolunteeringPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSddbpHxC7GV1caA1bdTUrdEElLjZKE2bUuHLVSF3UwfWNjcAg/viewform?usp=pp_url&entry.768985514=${encodeURIComponent(
        surname
      )}&entry.692787792=${encodeURIComponent(
        otherNames
      )}&entry.1544278846=${encodeURIComponent(
        dob
      )}&entry.476705980=${encodeURIComponent(
        age
      )}&entry.1488099661=${encodeURIComponent(
        email
      )}&entry.1619320725=${encodeURIComponent(
        phoneNumber
      )}&entry.547921972=${encodeURIComponent(
        college
      )}&entry.1899443147=${encodeURIComponent(
        program
      )}&entry.581633642=${encodeURIComponent(
        academicLevel
      )}&entry.1795880254=${encodeURIComponent(
        campusResidence
      )}&entry.1740743096=${encodeURIComponent(
        project
      )}&entry.1679030242=${encodeURIComponent(
        volunteeringPriority
      )}&entry.183444817=${encodeURIComponent(interest)}`;

      window.location.href = formUrl;
    } catch (error) {
      console.error("Error generating the form URL:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 mt-6">
      <div className="container mx-auto px-6">
        <div className="bg-stone-200 rounded-3xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            MEMBERSHIP FORM
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label
                htmlFor="Surname"
                className="block text-sm font-medium mb-2"
              >
                Surname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="OtherNames"
                className="block text-sm font-medium mb-2"
              >
                Other Names <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="OtherNames"
                value={otherNames}
                onChange={(e) => setOtherNames(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="DOB" className="block text-sm font-medium mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="DOB"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="Age" className="block text-sm font-medium mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="Email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="PhoneNumber"
                className="block text-sm font-medium mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="PhoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="college"
              >
                College <span className="text-red-500">*</span>
              </label>
              <select
                id="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              >
                <option value="">Select College</option>
                <option value="Engineering">Engineering</option>
                <option value="Sciences">Science</option>
                <option value="Arts">Art and Built Environment</option>
                <option value="Agriculture">
                  Agriculture and Natural Resources
                </option>
                <option value="Health Sciences">Health Sciences</option>
                <option value="Humanities">
                  Humanities and Social Sciences
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="Program"
                className="block text-sm font-medium mb-2"
              >
                Program <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="Program"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="academicLevel"
              >
                Academic Level <span className="text-red-500">*</span>
              </label>
              <select
                id="academicLevel"
                value={academicLevel}
                onChange={(e) => setAcademicLevel(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              >
                <option value="">Select Level</option>
                <option value="100">First Year</option>
                <option value="200">Second Year</option>
                <option value="300">Third Year</option>
                <option value="400">Fourth Year</option>
                <option value="500">Fifth Year</option>
                <option value="600">Sixth Year</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="CampusResidence"
                className="block text-sm font-medium mb-2"
              >
                Campus Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="CampusResidence"
                value={campusResidence}
                onChange={(e) => setCampusResidence(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="project"
              >
                Which Ullo Projects Interests You?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              >
                <option value="">Select Project</option>
                <option value="Clinics">Clinics</option>
                <option value="Kitchen Stoves">Kitchen Stoves</option>
                <option value="RWC/Irrigation">RWC/Irrigation</option>
                <option value="Water Project">Water Project</option>
                <option value="Bridge Project">Bridge Project</option>
                <option value="Shea Nut Project">Shea Nut Project</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="volunteeringPriority"
              >
                What is most important to you in volunteering with EWB-KNUST?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="volunteeringPriority"
                value={volunteeringPriority}
                onChange={(e) => setVolunteeringPriority(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              >
                <option value="">Select Option</option>
                <option value="Ability to Volunteer">
                  Ability to Volunteer
                </option>
                <option value="Building my Local & International network">
                  Building my Local & International network
                </option>
                <option value="Developing Skills">
                  Developing Skills (leadership, soft and hard skills)
                </option>
                <option value="Fulfilling the Most-Needed Option">
                  Fulfilling the Most-Needed Option
                </option>
                <option value="Flexibility of Time Commitment">
                  Flexibility of Time Commitment
                </option>
                <option value="Flexibility of Standard Volunteering Hours">
                  Flexibility of Standard Volunteering Hours
                </option>
                <option value="Opportunity to Travel">
                  Opportunity to Travel
                </option>
                <option value="Ghana-Based Opportunities">
                  Ghana-Based Opportunities
                </option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="interest"
              >
                Interest(s) <span className="text-red-500">*</span>
              </label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              >
                <option value="">Select Interest</option>
                <option value="Activities Planning / Organizing">
                  Activities Planning / Organizing
                </option>
                <option value="Fundraising">Fundraising</option>
                <option value="Public Relations / Media Management">
                  Public Relations / Media Management
                </option>
                <option value="Merely a Participant">
                  Merely a Participant
                </option>
                <option value="Financial and Equipment Donor">
                  Financial and Equipment Donor
                </option>
                <option value="Team / Project lead">Team / Project lead</option>
                <option value="Seminars/ Workshops">Seminars/ Workshops</option>
                <option value="Innovation">Innovation</option>
              </select>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                to="https://chat.whatsapp.com/HwpEXOFlbRVGWqj8pTwBsP"
                
              >
                <button className="bg-blue-500 w-full sm:w-[10rem] text-white hover:bg-blue-600 mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
                  Join Us
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
     
    </section>
  );
};


