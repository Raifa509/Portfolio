import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "HomeServe-MERN Project",
    description: "Full-stack MERN app for home service management with User and Admin modules. Users can browse services, book regular or emergency services. Admins can add services, manage service providers, and approve bookings. Includes authentication, CRUD operations, and responsive UI for seamless experience.",
    image: "home.png",
    github: "https://github.com/Raifa509/HomeServe-MERN-Project",
    demo: "#",
    status: "WIP",
  },
  {
    title: "BookStore-MERN Project",
    description: "A second-hand book selling website built with the MERN stack. Users can browse, buy, and sell books easily. Admins are responsible for approving books listed for sale, managing users, and adding careers. Features include secure JWT login, CRUD operations, Stripe checkout for payments, and a responsive interface.",
    image: "/bookstore.png",
    github: "https://github.com/Raifa509/BookStore-MERN-Project",
    demo: "https://book-store-mern-project-nine.vercel.app/",
    status: "Completed",
  },
  {
    title: "TrackMyHire",
    description: "React app demonstrating CRUD operations using Axios and a sample API. Users can add, view, update, and delete jobs. Dashboard shows stats by status, source, and work type.",
    image: "/track.png",
    github: "https://github.com/Raifa509/TrackMyHire-React-API",
    demo: "https://track-my-hire-react-api.vercel.app/",
    status: "Completed",
  },
  {
    title: "Resume Builder",
    description: "A React app to create resumes quickly. Users can input personal details, skills, and experiences, and generate professional-looking resumes instantly.",
    image: "/resume.png",
    github: "https://github.com/Raifa509/Resume-buillder-react",
    demo: "https://resume-buillder-react.vercel.app/",
    status: "Completed",
  },
  {
    title: "ToDo App",
    description: "A Redux-powered ToDo app to manage tasks efficiently. Supports task creation, deletion, marking as complete, and filtering by status. Fully responsive and lightweight.",
    image: "/todo.png",
    github: "https://github.com/Raifa509/ToDo-Redux",
    demo: "https://to-do-redux-beryl.vercel.app/",
    status: "Completed",
  },
  {
    title: "Netflix-UI-Clone",
    description: "Frontend UI clone of Netflix homepage using HTML/CSS. Includes a responsive layout, carousels, and hover animations to replicate the Netflix look and feel.",
    image: "/netflix.png",
    github: "https://github.com/Raifa509/Netflix-UI-Clone",
    demo: "https://practice-net-flix-clone.netlify.app/",
    status: "Completed",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  return (
    <section id="projects" className="bg-gray-950 py-12 px-6 md:px-40">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12">
        My Projects
      </h2>

      {/* Desktop Grid */}
      <motion.div
        className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-gray-900 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-shadow duration-500 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              {project.status === "WIP" && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-bold rounded-full z-10">
                  WIP
                </span>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 shadow-md transition-all"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a
                  href={project.demo === "#" ? undefined : project.demo}
                  target={project.demo === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-green-400 to-teal-500 transition-all shadow-md ${
                    project.demo === "#" ? "opacity-50 cursor-not-allowed" : "hover:from-teal-500 hover:to-green-400"
                  }`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Swiper */}
      <div className="sm:hidden mt-6">
        <Swiper slidesPerView={1} spaceBetween={16} pagination={{ clickable: true }}>
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  {project.status === "WIP" && (
                    <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-bold rounded-full z-10">
                      WIP
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 shadow-md transition-all"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={project.demo === "#" ? undefined : project.demo}
                      target={project.demo === "#" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-green-400 to-teal-500 transition-all shadow-md ${
                        project.demo === "#" ? "opacity-50 cursor-not-allowed" : "hover:from-teal-500 hover:to-green-400"
                      }`}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
