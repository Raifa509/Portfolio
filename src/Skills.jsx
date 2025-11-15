import React from "react";
import TiltedCard from "./Components/TiltedCard";

function Skills() {
  const skills = [
    { src: "html5.png", alt: "HTML5" },
    { src: "css.png", alt: "CSS3" },
    { src: "js.png", alt: "JavaScript" },
    { src: "ts.png", alt: "Typescript" },
    { src: "react.png", alt: "React" },
    { src: "https://brandlogos.net/wp-content/uploads/2025/04/angular_icon-logo_brandlogos.net_jn7wi-512x542.png", alt: "Angular" },
    { src: "tailwind.png", alt: "Tailwind CSS" },
    { src: "material.png", alt: "Material UI" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s", alt: "Bootstrap" },

    { src: "node.png", alt: "Node.js" },
    { src: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png", alt: "Express.js" },

    { src: "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg", alt: "MongoDB" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", alt: "Git" },
    { src: "https://images.icon-icons.com/3053/PNG/512/postman_macos_bigsur_icon_189815.png", alt: "Postman" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 w-full px-6 md:px-40 py-16">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 tektur-font text-center mb-16 tracking-wide">
        Skills
      </h2>

      <div className="backdrop-blur-xl bg-white/5 p-8 md:p-10 rounded-3xl shadow-xl shadow-cyan-500/10">

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-10 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] opacity-0 animate-fadeUp"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <TiltedCard
                imageSrc={skill.src}
                altText={skill.alt}
                containerHeight="80px"      
                containerWidth="80px"        
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={12}
                scaleOnHover={1.09}
                showTooltip={false}
                displayOverlayContent={false}
                className="md:!h-[110px] md:!w-[110px]"
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Skills;
