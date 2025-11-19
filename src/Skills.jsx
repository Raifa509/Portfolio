import React from "react";
import TiltedCard from "./Components/TiltedCard";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { src: "html5.png", alt: "HTML5" },
    { src: "css.png", alt: "CSS3" },
    { src: "js.png", alt: "JavaScript" },
    { src: "ts.png", alt: "Typescript" },
    { src: "react.png", alt: "React" },
    { src: "angular.webp", alt: "Angular" },
    { src: "tailwind.png", alt: "Tailwind CSS" },
    { src: "material.png", alt: "Material UI" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s", alt: "Bootstrap" },
    { src: "node.png", alt: "Node.js" },
    { src: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png", alt: "Express.js" },
    { src: "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg", alt: "MongoDB" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", alt: "Git" },
    { src: "postman.png", alt: "Postman" }
  ];

  return (
    <section id="skills" className="bg-gray-950 w-full px-4 sm:px-6 md:px-20 lg:px-40 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 tektur-font text-center mb-12 tracking-wide">
        Skills
      </h2>

      <div className="backdrop-blur-xl bg-white/5 p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl shadow-xl shadow-cyan-500/10">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="transition-all duration-300 opacity-0 animate-fadeUp"
              style={{ animationDelay: `${index * 0.08}s` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* TiltedCard only for md+ */}
              <div className="hidden md:block w-20 h-20 lg:w-28 lg:h-28">
                <TiltedCard
                  imageSrc={skill.src}
                  altText={skill.alt}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.09}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>

              {/* Plain static image for mobile */}
              <div className="block md:hidden w-16 h-16 sm:w-20 sm:h-20">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
