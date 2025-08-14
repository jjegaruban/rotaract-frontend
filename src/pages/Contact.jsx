import React from "react";

const Contact = () => {
  const contactTeams = [
    {
      team: "PRESIDENT",
      name: "Rtr. John Smith",
      phone: "+94 76 123 4567",
      email: "president@rotaractkandy.org"
    },
    {
      team: "SECRETARY",
      name: "Rtr. Sarah Johnson",
      phone: "+94 77 234 5678",
      email: "secretary@rotaractkandy.org"
    },
    {
      team: "CLUB SERVICE DIRECTOR",
      name: "Rtr. Michael Brown",
      phone: "+94 71 345 6789",
      email: "clubservice@rotaractkandy.org"
    },
    {
      team: "COMMUNITY SERVICE DIRECTOR",
      name: "Rtr. Emily Davis",
      phone: "+94 75 456 7890",
      email: "community@rotaractkandy.org"
    },
    {
      team: "INTERNATIONAL SERVICE DIRECTOR",
      name: "Rtr. David Wilson",
      phone: "+94 78 567 8901",
      email: "international@rotaractkandy.org"
    },
    {
      team: "PROFESSIONAL DEVELOPMENT DIRECTOR",
      name: "Rtr. Jessica Taylor",
      phone: "+94 72 678 9012",
      email: "professional@rotaractkandy.org"
    }
  ];

  return (
    <div className="font-inter min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#fef2f7] to-white py-20 px-6 text-center">
        <h1 className="font-bebas text-5xl md:text-6xl text-[#d22163] uppercase tracking-wide">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Reach out to our leadership team for any inquiries
        </p>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactTeams.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-[#d22163]">{member.team}</h2>
                  <p className="text-gray-800 font-medium mt-1">{member.name}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#d22163] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">{member.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#d22163] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 break-all">{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Contact Section */}
      <div className="bg-[#fef2f7] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#d22163] mb-6">General Inquiries</h2>
          <p className="text-gray-700 mb-8">
            For all other questions, please contact us at:<br />
            <span className="font-medium">info@rotaractkandy.org</span> or call <span className="font-medium">+94 81 222 3333</span>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-[#d22163] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#b21d56] transition">
              Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;