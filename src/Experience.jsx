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
    <section id="experience" className="bg-gray-950 py-35 px-6 md:px-40">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-18">
        Experience
      </h2>

      <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:-translate-x-1/2 before:bg-cyan-500">
        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              ref={(el) => (refs.current[idx] = el)}
              data-idx={idx}
              className="mb-10 flex justify-center relative"
            >
              <div
                className={`w-full md:w-1/2 px-4 transform transition-all duration-700 ${
                  visible.includes(idx.toString())
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}
              >
                <div className="bg-gray-900/60 backdrop-blur-lg p-6 rounded-xl shadow-lg relative">
                  <span
                    className={`absolute top-2 ${
                      isLeft ? "-right-12px" : "left-[-12px]"
                    } w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-950`}
                  ></span>
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
