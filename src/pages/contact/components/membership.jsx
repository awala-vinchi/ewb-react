import React from "react";

export default function FormPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Personal Information Section */}
        <div className="bg-stone-200 rounded-3xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            MEMBERSHIP FORM
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="Surname"
              >
                Surname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="Surname"
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="otherNames"
              >
                Other Names <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="otherNames"
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="dob">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dob"
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="age">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="age"
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="                w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
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
                className="block text-sm font-medium mb-2"
                htmlFor="program"
              >
                Programme of Study
              </label>
              <input
                type="text"
                id="program"
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
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
                className="block text-sm font-medium mb-2"
                htmlFor="campusResidence"
              >
                Campus Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="campusResidence"
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                required
              />
            </div>
          </form>
        </div>

        {/* Projects Section */}
        <div className="bg-stone-200 rounded-3xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">PROJECTS</h2>
          <form className="flex justify-evenly">
            {/* Column 1: Ullo Projects */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Which Ullo Projects Interest You?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" value="Clinics" /> Clinics
                </label>
                <label>
                  <input type="checkbox" value="Kitchen Stoves" /> Kitchen
                  Stoves
                </label>
                <label>
                  <input type="checkbox" value="RWC/Irrigation" />{" "}
                  RWC/Irrigation
                </label>
                <label>
                  <input type="checkbox" value="Water Project" /> Water Project
                </label>
                <label>
                  <input type="checkbox" value="Bridge Project" /> Bridge
                  Project
                </label>
                <label>
                  <input type="checkbox" value="Shea Nut Project" /> Shea Nut
                  Project
                </label>
              </div>
            </div>

            {/* Column 2: Volunteering Preferences */}
            <div>
              <label className="block text-sm font-medium mb-2">
                What is most important to you in volunteering with EWB-KNUST?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" value="Ability to Volunteer" /> Ability
                  to Volunteer
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Building my Local & International network"
                  />{" "}
                  Building my Local & International network
                </label>
                <label>
                  <input type="checkbox" value="Developing Skills" /> Developing
                  Skills (leadership, soft and hard skills)
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Fulfilling the Most-Needed Option"
                  />{" "}
                  Fulfilling the Most-Needed Option
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Flexibility of Time Commitment"
                  />{" "}
                  Flexibility of Time Commitment
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Flexibility of Standard Volunteering Hours"
                  />{" "}
                  Flexibility of Standard Volunteering Hours
                </label>
                <label>
                  <input type="checkbox" value="Opportunity to Travel" />{" "}
                  Opportunity to Travel
                </label>
                <label>
                  <input type="checkbox" value="Ghana-Based Opportunities" />{" "}
                  Ghana-Based Opportunities
                </label>
              </div>
            </div>

            {/* Column 3: Roles in EWB-KNUST */}
            <div>
              <label className="block text-sm font-medium mb-2">
                What role do you wish to be active in with EWB-KNUST?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col space-y-2">
                <label>
                  <input
                    type="checkbox"
                    value="Activities Planning / Organizing"
                  />{" "}
                  Activities Planning / Organizing
                </label>
                <label>
                  <input type="checkbox" value="Fundraising" /> Fundraising
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Public Relations / Media Management"
                  />{" "}
                  Public Relations / Media Management
                </label>
                <label>
                  <input type="checkbox" value="Merely a Participant" /> Merely
                  a Participant
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Financial and Equipment Donor"
                  />{" "}
                  Financial and Equipment Donor
                </label>
                <label>
                  <input type="checkbox" value="Team / Project lead" /> Team /
                  Project lead
                </label>
                <label>
                  <input type="checkbox" value="Seminars / Workshops" />{" "}
                  Seminars / Workshops
                </label>
                <label>
                  <input type="checkbox" value="Innovation" /> Innovation
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

