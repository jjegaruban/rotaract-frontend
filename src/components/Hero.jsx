// import React, { useState, useEffect } from "react";
// import CountUp from "react-countup";
// import club from "../assets/club.jpeg";
// import logo from "../assets/logo/logo.png"; // Placeholder for memories & news

// const Home = () => {
//   const avenues = [
//     { title: "Club Service", desc: "Strengthening fellowship and ensuring the smooth functioning of the club." },
//     { title: "Community Service", desc: "Projects aimed at improving lives in our local communities." },
//     { title: "International Service", desc: "Fostering global understanding through international cooperation." },
//     { title: "Professional Development", desc: "Empowering members and youth through skill development in Sri Lanka." },
//     { title: "Public Relations", desc: "Maintaining a unified and positive image of the club." },
//     { title: "Sports & Recreation", desc: "A platform for showcasing talents through sports and recreation." }
//   ];

//   const stats = [
//     { value: 500, label: "Projects Completed" },
//     { value: 35, label: "Years in Service" },
//     { value: 50, label: "Members" },
//     { value: 40, label: "Awards" }
//   ];

//   const memories = [
//     "Splendid Moves", "Elders Home Donation", "Christmas Carols", "Blood Donation",
//     "Happiness Hour", "Alawanguwa", "Vesak Lanterns", "Vibes of Perahera"
//   ];

//   const latestNews = [
//     { title: "Annual Project Kickoff", date: "Aug 2025", desc: "We kick off our annual community projects with a vision to create meaningful change." },
//     { title: "Youth Leadership Camp", date: "Jul 2025", desc: "Empowering the next generation of leaders through workshops and team building." },
//     { title: "Blood Drive Impact", date: "Jun 2025", desc: "Our recent blood donation campaign saved hundreds of lives in our community." },
//     { title: "Community Clean-Up", date: "May 2025", desc: "Volunteers participated in a massive community cleaning event." },
//     { title: "Charity Fundraiser", date: "Apr 2025", desc: "Successfully raised funds to support local schools and orphanages." }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % latestNews.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [latestNews.length]);

//   // Determine number of cards per view based on screen
//   const getCardWidth = () => {
//     if (window.innerWidth >= 1024) return 33.333; // 3 cards on desktop
//     if (window.innerWidth >= 640) return 50;      // 2 cards on tablet
//     return 100;                                   // 1 card on mobile
//   };

//   const [cardWidth, setCardWidth] = useState(getCardWidth());

//   useEffect(() => {
//     const handleResize = () => setCardWidth(getCardWidth());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="bg-white font-inter relative">

//       {/* Hero Section */}
//       <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#fef2f7] to-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="font-bebas text-[#d22163] lg:text-[100px] text-5xl leading-none tracking-wide uppercase">
//             ROTARACT CLUB OF KANDY HILL CAPITAL
//           </h1>
//           <h2 className="font-poppins text-[#d22163] text-base mt-4 uppercase tracking-wide">#talkofthetown</h2>

//           <div className="mt-16 flex flex-wrap justify-center gap-12">
//             {stats.map((s, i) => (
//               <div key={i} className="text-center">
//                 <p className="text-[#d22163] text-5xl font-bebas">
//                   <CountUp end={s.value} duration={3} suffix={s.value >= 50 ? "+" : ""} />
//                 </p>
//                 <p className="text-black/80 text-lg font-medium">{s.label}</p>
//               </div>
//             ))}
//           </div>

//           <p className="mt-12 text-lg sm:text-xl text-black/70 leading-relaxed max-w-3xl mx-auto font-medium">
//             Empowering youth and leading impactful community projects. Together we serve, lead, and grow stronger in unity.
//           </p>
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
//           <div className="md:w-1/2 space-y-6">
//             <h2 className="text-4xl font-bold text-[#d22163]">Who We Are?</h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               The Rotaract Club of Kandy is one of the oldest and most prestigious clubs in RI District 3220, chartered on April 16th, 1986.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               For decades, we have uplifted our community through innovative and impactful projects, upholding the true spirit of Rotaract.
//             </p>
//           </div>
//           <div className="md:w-1/2">
//             <img src={club} alt="Club" className="rounded-xl w-full h-80 object-cover shadow-lg" />
//           </div>
//         </div>
//       </section>

//       {/* Avenues Section */}
//       <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#d22163] mb-4">Main Avenues</h2>
//           <div className="w-20 h-1 bg-[#d22163] mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//             Discover the diverse services offered by the Rotaract Club of Kandy Hill Capital.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {avenues.map((a, i) => (
//               <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all">
//                 <div className="text-[#d22163] text-xl font-bold mb-3">{a.title}</div>
//                 <p className="text-gray-600">{a.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Memories Gallery */}
//       {/* Memories Gallery */}
// <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
//   <div className="max-w-6xl mx-auto text-center">
//     <h2 className="text-4xl font-bold text-[#d22163] mb-4">Our Memories</h2>
//     <div className="w-20 h-1 bg-[#d22163] mx-auto mb-6"></div>
//     <p className="text-lg text-gray-600 mb-12">
//       A moment lasts only a second, but the memory lasts forever.
//     </p>

//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[150px]">
//       {memories.map((m, i) => {
//         // Random spans for dynamic layout
//         const colSpan = [1, 2, 2, 1, 1, 3][i % 6]; 
//         const rowSpan = [1, 1, 2, 2, 1, 1][i % 6];

//         return (
//           <div
//             key={i}
//             className={`relative overflow-hidden rounded-xl shadow-lg col-span-${colSpan} row-span-${rowSpan}`}
//           >
//             <img
//               src={logo}
//               alt={m}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
//               <span className="text-white font-semibold text-lg px-2 text-center">{m}</span>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>


//       {/* Latest News Slider */}
//       <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#d22163] mb-4">Latest News</h2>
//           <div className="w-20 h-1 bg-[#d22163] mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 mb-12">
//             Stay updated with our recent events and upcoming projects.
//           </p>

//           {/* Slider */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-700"
//               style={{
//                 transform: `translateX(-${currentSlide * cardWidth}%)`,
//                 width: `${latestNews.length * cardWidth}%`
//               }}
//             >
//               {latestNews.map((news, i) => (
//                 <div key={i} className="flex-shrink-0 px-2" style={{ width: `${cardWidth}%` }}>
//                   <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col">
//                     <img src={logo} alt={news.title} className="w-full h-64 object-cover" />
//                     <div className="p-6 flex-1 flex flex-col justify-between">
//                       <div>
//                         <div className="text-sm text-[#d22163] font-semibold mb-2">{news.date}</div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
//                         <p className="text-gray-600 text-sm">{news.desc}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import club from "../assets/club.jpeg";
import logo from "../assets/logo/logo.png";

const Home = () => {
  const avenues = [
    { title: "Club Service", desc: "Strengthening fellowship and ensuring the smooth functioning of the club." },
    { title: "Community Service", desc: "Projects aimed at improving lives in our local communities." },
    { title: "International Service", desc: "Fostering global understanding through international cooperation." },
    { title: "Professional Development", desc: "Empowering members and youth through skill development in Sri Lanka." },
    { title: "Public Relations", desc: "Maintaining a unified and positive image of the club." },
    { title: "Sports & Recreation", desc: "A platform for showcasing talents through sports and recreation." }
  ];

  const stats = [
    { value: 500, label: "Projects Completed" },
    { value: 35, label: "Years in Service" },
    { value: 50, label: "Members" },
    { value: 40, label: "Awards" }
  ];

  const memories = [
    "Splendid Moves", "Elders Home Donation", "Christmas Carols", "Blood Donation",
    "Happiness Hour", "Alawanguwa", "Vesak Lanterns", "Vibes of Perahera"
  ];

  const latestNews = [
    { title: "Annual Project Kickoff", date: "Aug 2025", desc: "We kick off our annual community projects with a vision to create meaningful change." },
    { title: "Youth Leadership Camp", date: "Jul 2025", desc: "Empowering the next generation of leaders through workshops and team building." },
    { title: "Blood Drive Impact", date: "Jun 2025", desc: "Our recent blood donation campaign saved hundreds of lives in our community." },
    { title: "Community Clean-Up", date: "May 2025", desc: "Volunteers participated in a massive community cleaning event." },
    { title: "Charity Fundraiser", date: "Apr 2025", desc: "Successfully raised funds to support local schools and orphanages." }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(100);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % latestNews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [latestNews.length]);

  // Determine number of cards per view based on screen
  const getCardWidth = () => {
    if (window.innerWidth >= 1024) return 33.333; // 3 cards on desktop
    if (window.innerWidth >= 640) return 50;      // 2 cards on tablet
    return 100;                                   // 1 card on mobile
  };

  useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white font-inter relative">
      {/* Hero Section */}
            {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#fef2f7] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-[100px] text-[#d22163] leading-none tracking-wide uppercase">
            ROTARACT CLUB OF <br className="hidden md:block" /> KANDY HILL CAPITAL
          </h1>
          <h2 className="font-poppins text-[#d22163] text-lg mt-4 uppercase tracking-wider">#talkofthetown</h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <p className="text-[#d22163] text-3xl md:text-5xl font-bebas">
                  <CountUp end={s.value} duration={3} suffix={s.value >= 50 ? "+" : ""} />
                </p>
                <p className="text-black/80 text-sm md:text-base font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-black/70 leading-relaxed max-w-3xl mx-auto font-medium">
            Empowering youth and leading impactful community projects. Together we serve, lead, and grow stronger in unity.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#d22163]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#d22163]/5 blur-3xl"></div>
      </section>


      {/* Who We Are */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d22163]">Who We Are?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                The Rotaract Club of Kandy is one of the oldest and most prestigious clubs in RI District 3220, chartered on April 16th, 1986.
              </p>
              <p className="text-lg leading-relaxed">
                For decades, we have uplifted our community through innovative and impactful projects, upholding the true spirit of Rotaract.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={club} 
                alt="Club Members" 
                className="w-full h-auto object-cover aspect-video lg:aspect-auto lg:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="font-medium">Since 1986</p>
                <h3 className="text-2xl font-bold">Serving Kandy Community</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avenues Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#d22163] mb-4">Main Avenues</h2>
          <div className="w-20 h-1 bg-[#d22163] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Discover the diverse services offered by the Rotaract Club of Kandy Hill Capital.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avenues.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all">
                <div className="text-[#d22163] text-xl font-bold mb-3">{a.title}</div>
                <p className="text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#d22163] mb-4">Our Memories</h2>
          <div className="w-20 h-1 bg-[#d22163] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-12">
            A moment lasts only a second, but the memory lasts forever.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[150px]">
            {memories.map((m, i) => {
              const colSpan = [1, 2, 2, 1, 1, 3][i % 6]; 
              const rowSpan = [1, 1, 2, 2, 1, 1][i % 6];

              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-xl shadow-lg col-span-${colSpan} row-span-${rowSpan}`}
                >
                  <img
                    src={logo}
                    alt={m}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                    <span className="text-white font-semibold text-lg px-2 text-center">{m}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News Slider */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#d22163] mb-4">Latest News</h2>
          <div className="w-20 h-1 bg-[#d22163] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-12">
            Stay updated with our recent events and upcoming projects.
          </p>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${currentSlide * cardWidth}%)`,
                width: `${latestNews.length * cardWidth}%`
              }}
            >
              {latestNews.map((news, i) => (
                <div key={i} className="flex-shrink-0 px-2" style={{ width: `${cardWidth}%` }}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col">
                    <img src={logo} alt={news.title} className="w-full h-64 object-cover" />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-sm text-[#d22163] font-semibold mb-2">{news.date}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
                        <p className="text-gray-600 text-sm">{news.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;