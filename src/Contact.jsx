import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-950 py-32 px-6 md:px-40">
            {/* Heading with subtle gradient */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-200">
                Let’s Connect
            </h2>


            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg md:text-xl">
                I’m open to collaborating on projects, discussing ideas, or just connecting professionally. Reach out via email, phone, or connect on LinkedIn or GitHub.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                <a
                    href="mailto:fathimathulraifanp@gmail.com"
                    className="flex items-center justify-center px-8 py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email Me
                </a>

                <a
                    href="https://www.linkedin.com/in/fathimathulraifa-np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
                </a>

                <a
                    href="https://github.com/Raifa509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-3 rounded-xl bg-linear-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
                >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
                </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-center">
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400 text-xl" />
                    <span className="text-gray-200 text-lg">Al Nasseriya, Sharjah, UAE</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-green-400 text-xl" />
                    <span className="text-gray-200 text-lg">+971 566710246</span>
                </div>
            </div>
        </section>
    );
}
