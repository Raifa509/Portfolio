import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
  };

  return (
    <section id="contact" className="bg-gray-950 md:py-32 px-6 md:px-40">
      <motion.h2 initial={{opacity:0}} animate={{opacity:100}} transition={{duration:2}} className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-200">
        Let’s Connect
      </motion.h2>

      <motion.p initial={{opacity:0}} animate={{opacity:100}} transition={{duration:2}}  className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg md:text-xl">
        I’m open to collaborating on projects, discussing ideas, or just connecting professionally. Reach out via email, phone, or connect on LinkedIn or GitHub.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
        {[
          { icon: faEnvelope, text: "Email Me", href: "mailto:fathimathulraifanp@gmail.com", from: "pink-500", to: "purple-600" },
          { icon: faLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/fathimathulraifa-np", from: "blue-500", to: "indigo-600" },
          { icon: faGithub, text: "GitHub", href: "https://github.com/Raifa509", from: "gray-700", to: "gray-900" },
        ].map((btn, index) => (
          <motion.a
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariants}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-8 py-3 rounded-xl bg-linear-to-r from-${btn.from} to-${btn.to} hover:from-${btn.to} hover:to-${btn.from} text-white font-semibold shadow-lg transition-transform transform hover:scale-105`}
          >
            <FontAwesomeIcon icon={btn.icon} className="mr-2" /> {btn.text}
          </motion.a>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400 text-xl" />
          <span className="text-gray-200 text-lg">Al Nasseriya, Sharjah, UAE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="text-green-400 text-xl" />
          <span className="text-gray-200 text-lg">+971 566710246</span>
        </motion.div>
      </div>
    </section>
  );
}
