import React from "react";
import logo from "../assets/logo/logo.png";

const Events = () => {
  const eventsData = [
    {
      title: "Youth Leadership Camp",
      date: "15 July 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kandy City Center",
      image: logo
    },
    {
      title: "Blood Donation Campaign",
      date: "28 June 2025",
      time: "8:00 AM - 4:00 PM",
      location: "Kandy Teaching Hospital",
      image: logo
    },
    {
      title: "Community Clean-Up",
      date: "5 May 2025",
      time: "7:00 AM - 12:00 PM",
      location: "Kandy Lake Area",
      image: logo
    },
    {
      title: "Education Fundraiser",
      date: "12 April 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Kandyan Hotel",
      image: logo
    },
    {
      title: "Mental Health Workshop",
      date: "Coming Soon",
      time: "TBD",
      location: "Online",
      image: logo
    },
    {
      title: "District Conference",
      date: "November 2025",
      time: "All Day",
      location: "Colombo",
      image: logo
    }
  ];

  return (
    <div className="font-inter min-h-screen bg-white pt-20">
      {/* pt-20 adds top padding so fixed navbar doesn't cover content */}

      {/* Hero Section */}
      <div className="bg-[#fef2f7] py-16 px-6 text-center">
        <h1 className="font-bebas text-5xl md:text-6xl text-[#d22163] uppercase tracking-wide">
          Events
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Our upcoming and past events
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-[#d22163]">
                    {event.date === "Coming Soon" ? "Coming Soon" : event.date}
                  </span>
                  {event.date !== "Coming Soon" && (
                    <span className="text-xs bg-[#fef2f7] text-[#d22163] px-2 py-1 rounded">
                      {event.time}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
