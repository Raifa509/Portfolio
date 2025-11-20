import React from 'react'
import TextType from './Components/TextType'
import GradientText from './Components/GradientText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faDownload, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

function LandingPage() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-white md:min-h-screen mt-30 md:mt-0">
                <motion.div initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }} className="order-2 lg:order-1 flex flex-col mt-15 lg:mt-50 text-center text-white lg:ms-32">
                    <h1 className="md:text-3xl text-2xl font-light tracking-wide text-gray-300 tektur-font">
                        Hi , I'm
                    </h1>
                    <GradientText
                        colors={["#e879f9", "#a78bfa", "#22d3ee", "#a78bfa", "#e879f9"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class md:text-6xl text-4xl md:leading-20 leading-15 font-extrabold tektur-font"
                    >
                        Fathimathul Raifa NP
                    </GradientText>

                    <div className="mt-2 md:text-2xl text-xl font-medium tracking-wide  text-gray-300 tektur-font">
                        <TextType
                            text={["Full-Stack Developer", "Frontend Developer", "Backend Developer"]}
                            typingSpeed={120}
                            pauseDuration={1500}
                            deletingSpeed={100}
                            showCursor={true}
                            cursorCharacter="_"
                        />
                    </div>


                    <div className='px-5 py-2 mt-4 flex flex-col sm:flex-row items-center sm:items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6'>
                        {/* Resume link */}
                        <a
                            href="/Fathimathul Raifa_resume.pdf"
                            download
                            className="tektur-font text-cyan-400 text-lg font-semibold flex items-center space-x-2 hover:underline hover:text-cyan-300 transition-colors duration-300"
                        >
                            <span>Resume</span>
                            <FontAwesomeIcon icon={faArrowRight} className='-ms-2'/>
                        </a>

                        {/* Social icons */}
                        <div className="flex space-x-3 text-violet-200 justify-center">
                            <a
                                href="https://www.linkedin.com/in/fathimathulraifa-np"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-cyan-300"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a
                                href="https://github.com/Raifa509"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-cyan-300"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a
                                href="mailto:fathimathulraifanp@gmail.com"
                                className="text-2xl text-cyan-300"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>


                </motion.div>



                {/* image div */}
               <motion.div
  initial={{ opacity: 0, x: 50, scale: 0.8 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  className="order-1 lg:order-2 flex items-center justify-center"
>
  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-96 md:h-96 -mt-8 sm:-mt-12 md:-mt-20 mx-auto">
    
    {/* Cyan glow */}
    <div className="absolute -inset-4 rounded-full bg-cyan-400 opacity-30 blur-lg"></div>

    {/* Image container */}
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <img
        className="w-full h-full object-cover object-top"
        src="Raifa.jpg"
        alt="Raifa"
      />
    </div>
  </div>
</motion.div>



            </div>

        </>
    )
}

export default LandingPage