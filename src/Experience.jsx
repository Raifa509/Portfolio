import React, { useRef, useEffect, useState } from "react";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "ME(A)RN Stack Trainee",
    company: "Luminar Technolab",
    period: "May 2025 - Present",
    location: "Kochi, Kerala",
  },
  {
    role: "Student Intern",
    company: "Techgentsia",
    period: "Jan 2025 - Apr 2025",
    location: "Infopark, Kochi",
  },
];

export default function ScrollTimeline() {
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target.dataset.idx]);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-gray-950 py-20 px-6 md:px-40">
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-200 text-center mb-16">
        Experience
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 w-1 bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-200 h-full -translate-x-1/2"></div>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              ref={(el) => (refs.current[idx] = el)}
              data-idx={idx}
              className="mb-10 flex justify-center w-full relative"
            >
              <div
                className={`w-full md:w-1/2 px-4 transform transition-all duration-700 ${
                  visible.includes(idx.toString())
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}
              >
                <div className="bg-gray-900/60 backdrop-blur-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-shadow duration-500 p-6 rounded-xl shadow-lg relative">
                  {/* Timeline circle (hidden on small screens) */}
                  <span
                    className={`hidden md:block absolute top-1/2 w-4 h-4 bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-200 rounded-full border-2 border-gray-950 -translate-y-1/2 ${
                      isLeft ? "right-[-32px]" : "left-[-32px]"
                    }`}
                  ></span>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-gray-300 flex items-center gap-2 mt-1">
                    <FaBuilding /> {exp.company}
                  </p>
                  <p className="text-gray-300 flex items-center gap-2 mt-1">
                    <FaCalendarAlt /> {exp.period}
                  </p>
                  <p className="text-gray-300 flex items-center gap-2 mt-1">
                    <FaMapMarkerAlt /> {exp.location}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
