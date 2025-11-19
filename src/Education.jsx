import React from "react";
import { FaUniversity, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section className="bg-gray-950 py-10 px-6 md:px-40">
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-200 text-center mb-12">
        Education
      </h2>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full md:w-2/3 text-center hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-shadow duration-500"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Master of Computer Applications (MCA)</h3>

          <p className="text-gray-300 flex items-center justify-center gap-2 mb-2 text-sm md:text-base">
            <FaUniversity className="text-gradient bg-linear-to-r from-cyan-400 via-purple-400 to-blue-400" /> 
            <span className="truncate md:truncate-none">APJ Abdul Kalam Technological University</span>
          </p>

          <p className="text-gray-300 flex items-center justify-center gap-2 mb-2">
            <FaCalendarAlt className="text-cyan-400" /> 2023 - 2025
          </p>

          <p className="text-gray-300 flex items-center justify-center gap-2">
            <FaStar className="text-yellow-400" /> CGPA: 8.92 / 10
          </p>
        </motion.div>
      </div>
    </section>
  );
}
