import React from "react";

function About() {
  const softSkills = [
    "Teamwork",
    "Adaptability",
    "Continuous Learning",
    "Time Management",
    "Creativity",
  ];

  return (
    <div id="about" className="min-h-screen bg-gray-950 md:pt-20 px-6 md:px-20 text-white flex flex-col items-center">
      <div className="flex flex-col md:grid md:grid-cols-2 bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.25)] md:mx-32 p-10 gap-10 border border-cyan-500/10">

        <div className="order-2 md:order-1 flex items-center justify-center mt-12 md:mt-0">
          <div className="relative h-64 w-64 md:h-80 md:w-80 border-2 border-cyan-300 rounded-2xl shadow-[0_0_20px_#22d3ee]">
            <div className="order-2 md:order-1 absolute h-64 w-64 md:h-80 md:w-80 left-5 bottom-5 overflow-hidden rounded-2xl">
              <img
                src="/Raifa.jpg"
                alt="Raifa"
                className="object-cover h-full w-full rounded-2xl opacity-95 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

       
        <div className="flex flex-col justify-center text-gray-300 leading-relaxed order-1 md:order-2 text-justify">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 tektur-font mb-6 text-center md:text-left">
            About Me
          </h2>

          <p className="text-lg mb-5 ">
            I’m <span className="text-cyan-400 font-semibold">Fathimathul Raifa NP</span>, a passionate web developer with a{" "}
            <span className="text-cyan-400 font-semibold">Master’s in Computer Applications (MCA)</span>.
          </p>

          <p className="text-lg mb-5">
            Skilled in both <span className="text-cyan-400 font-semibold">MERN</span> and{" "}
            <span className="text-cyan-400 font-semibold">MEAN</span> stacks, I enjoy building clean,
            responsive, and user-friendly web applications.
          </p>

          <p className="text-lg mb-8">
            I’m a quick learner who loves exploring new technologies and growing through teamwork and creativity.
          </p>

          <h3 className="text-2xl font-semibold text-cyan-300 mb-4 tektur-font">
            Soft Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/80 text-cyan-300 font-medium rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
