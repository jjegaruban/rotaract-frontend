
import React from "react";
import logo from "../assets/logo/logo.png";

const About = () => {
  const milestones = [
    { year: "1989", title: "Club Founded", description: "Rotaract Club of Kandy Hill Capital was established." },
    { year: "1995", title: "First Major Project", description: "Launched our first community development initiative." },
    { year: "2010", title: "International Recognition", description: "Received Rotary International Award for outstanding service." },
    { year: "2023", title: "Digital Transformation", description: "Expanded our reach through digital platforms." },
  ];

  return (
    <div className="bg-white font-inter min-h-screen">

      {/* Heading Section - Pink Background */}
      <section className="bg-[#fef2f7] pt-32 md:pt-36 lg:pt-40 pb-16 px-6 text-center">
        <h1 className="font-bebas text-5xl md:text-6xl text-[#d22163] uppercase tracking-wide">
          About Our Club
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Rotaract Club of Kandy Hill Capital has been serving communities since 1989, creating lasting change through fellowship and service.
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={logo} 
              alt="Rotaract Club Members" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#d22163] mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Rotaract Club of Kandy Hill Capital is a dynamic youth organization affiliated with Rotary International. We bring together young leaders to create positive change in our communities.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our members are students and young professionals aged 18-30 who are passionate about service, leadership development, and international understanding.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#fef2f7] p-4 rounded-lg">
                <h3 className="font-bold text-[#d22163]">Founded</h3>
                <p className="text-gray-700">1989</p>
              </div>
              <div className="bg-[#fef2f7] p-4 rounded-lg">
                <h3 className="font-bold text-[#d22163]">Members</h3>
                <p className="text-gray-700">50+ Active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#d22163] text-center mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Service",
                description: "Implementing projects that address real community needs in Kandy and surrounding areas."
              },
              {
                title: "Professional Development",
                description: "Helping members develop leadership skills and professional competencies."
              },
              {
                title: "International Understanding",
                description: "Promoting cross-cultural exchange and global awareness through international projects."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#d22163] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#d22163] text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-[#d22163] transform -translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="md:w-1/2 p-4">
                  <div className="bg-[#fef2f7] p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#d22163]">{milestone.title}</h3>
                    <p className="text-gray-700 mt-2">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 p-4">
                  <div className={`h-full flex items-center justify-${index % 2 === 0 ? 'start' : 'end'}`}>
                    <div className="text-2xl font-bold text-[#d22163] bg-white px-4 py-2 rounded-full border-4 border-[#d22163]">
                      {milestone.year}
                    </div>
                  </div>
                </div>
                {/* Mobile year display */}
                <div className="md:hidden text-lg font-bold text-[#d22163] mt-2">
                  {milestone.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#fef2f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#d22163] mb-6">Join Our Movement</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Ready to make a difference while developing your leadership skills and expanding your network?
          </p>
          <button className="bg-[#d22163] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#b21d56] transition-colors">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
