import { motion } from "framer-motion";

function About() {
  const softSkills = [
    "Teamwork",
    "Adaptability",
    "Continuous Learning",
    "Time Management",
    "Creativity",
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gray-950 md:pt-20 sm:px-6 md:px-20 lg:px-40 text-white flex flex-col items-center"
    >
      <div className="flex flex-col md:grid md:grid-cols-2 bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.25)] md:mx-32 p-6 md:p-10 gap-10 border border-cyan-500/10 w-full">

        {/* Image */}
        <motion.div
          className="order-2 md:order-1 flex items-center justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 border-2 border-cyan-300 rounded-2xl shadow-[0_0_20px_#22d3ee]">
            {/* Offset inner image */}
            <div className="absolute left-2 sm:left-3 md:left-5 bottom-2 sm:bottom-3 md:bottom-5 w-full h-full overflow-hidden rounded-2xl">
              <img
                src="/Raifa.jpg"
                alt="Raifa"
                className="object-cover w-full h-full rounded-2xl opacity-95 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex flex-col justify-center text-gray-300 leading-relaxed order-1 md:order-2 text-justify"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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

          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-800/80 text-cyan-300 font-medium rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:scale-105 transition-all duration-300"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
