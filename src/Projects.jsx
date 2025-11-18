import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
    {
        title: "HomeServe-MERN-Project",
        description: "Full-stack MERN app for home service management.",
        image: "home.png",
        github: "https://github.com/Raifa509/HomeServe-MERN-Project",
        demo: "#",
        status: "WIP",
    },
    {
        title: "BookStore-MERN-Project",
        description: "MERN stack project with secure JWT login, CRUD, and Stripe checkout.",
        image: "/bookstore.png",
        github: "https://github.com/Raifa509/BookStore-MERN-Project",
        demo: "https://book-store-mern-project-nine.vercel.app/",
        status: "Completed",
    },
    {
        title: "TrackMyHire",
        description: "React application to track job applications with CRUD support.",
        image: "/track.png",
        github: "https://github.com/Raifa509/TrackMyHire-React-API",
        demo: "https://track-my-hire-react-api.vercel.app/",
        status: "Completed",
    },
    {
        title: "Dictionary-word-Fetch",
        description: "Type a word to search its definition, pronunciation, part of speech, and hear audio pronunciation using React and an API.",
        image: "/dictionary.png",
        github: "https://github.com/Raifa509/Dictionary-word-Fetch",
        demo: "https://word-finder-fetch.netlify.app/",
        status: "Completed",
    },
    {
        title: "Resume Builder",
        description: "A React app to create resumes quickly.",
        image: "/resume.png",
        github: "https://github.com/Raifa509/Resume-buillder-react",
        demo: "https://resume-buillder-react.vercel.app/",
        status: "Completed",
    },
    {
        title: "ToDo-Redux",
        description: "A Redux-powered ToDo app to manage tasks efficiently.",
        image: "/todo.png",
        github: "https://github.com/Raifa509/ToDo-Redux",
        demo: "https://to-do-redux-beryl.vercel.app/",
        status: "Completed",
    },
    {
        title: "YouTube-UI-Clone",
        description: "Frontend UI clone of YouTube homepage using HTML/CSS.",
        image: "/youtube.png",
        github: "https://github.com/yourusername/Youtube-UI-clone",
        demo: "https://youtube-ui-clone-prac.netlify.app/",
        status: "Completed",
    },
    {
        title: "Netflix-UI-Clone",
        description: "Frontend UI clone of Netflix homepage using HTML/CSS.",
        image: "/netflix.png",
        github: "https://github.com/Raifa509/Netflix-UI-Clone",
        demo: "https://practice-net-flix-clone.netlify.app/",
        status: "Completed",
    },
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="bg-gray-950 py-20 px-6 md:px-40">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-16 tektur-font">
                My Projects
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="relative w-full aspect-4/3 rounded-2xl overflow-hidden group cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
                    >
                        {/* WIP Badge */}
                        {project.status === "WIP" && (
                            <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 text-xs font-bold rounded-full z-10">
                                WIP
                            </span>
                        )}

                        {/* Background Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-br from-indigo-700 via-cyan-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-700 text-center">
                            <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-2">{project.title}</h3>
                            <p className="text-gray-200 text-xs md:text-gray-200 md:mb-4">{project.description}</p>

                            {/* GitHub and Live Demo Links */}
                            <div className="flex space-x-2 md:space-x-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-gray-800/60 px-2 py-1 rounded-md hover:bg-gray-700 transition-all duration-300 flex items-center space-x-1 md:space-x-2 text-xs md:text-sm"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-white bg-gray-800/60 px-2 py-1 rounded-md transition-all duration-300 flex items-center space-x-1 md:space-x-2 text-xs md:text-sm ${project.status === "WIP" || project.demo === "#"
                                        ? "cursor-not-allowed opacity-50 hover:bg-gray-800"
                                        : "hover:bg-gray-700"
                                        }`}
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Gradient Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-700 via-cyan-600 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>

        </section>
    );
}
