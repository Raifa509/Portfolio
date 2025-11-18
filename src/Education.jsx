import React from "react";
import { FaUniversity, FaCalendarAlt, FaStar } from "react-icons/fa";

export default function EducationSection() {
  return (
    <section className="bg-gray-950 py-10 pb-10 px-6 md:px-40">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12">
        Education
      </h2>

      <div className="flex justify-center">
        <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full md:w-2/3 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Master of Computer Applications(MCA)</h3>
         <p className="text-gray-300 flex items-center justify-center gap-2 mb-2 text-sm md:text-base">
  <FaUniversity className="text-cyan-400" /> 
  <span className="truncate md:truncate-none">APJ Abdul Kalam Technological University</span>
</p>

          <p className="text-gray-300 flex items-center justify-center gap-2 mb-2">
            <FaCalendarAlt /> 2023 - 2025
          </p>
          <p className="text-gray-300 flex items-center justify-center gap-2">
            <FaStar /> CGPA: 8.92 / 10
          </p>
        </div>
      </div>
    </section>
  );
}
