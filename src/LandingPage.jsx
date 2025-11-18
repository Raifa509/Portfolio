import React from 'react'
import TextType from './Components/TextType'
import GradientText from './Components/GradientText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

function LandingPage() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white md:min-h-screen mt-27 md:mt-0">
                <motion.div initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }} className="order-2 md:order-1 flex flex-col mt-10 md:mt-50 text-center text-white md:ms-32">
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


                    <div className='px-5 py-2 mt-8 flex items-center justify-center '>
                        <a
                            href="/Fathimathul Raifa_resume.pdf"
                            download
                            className="tektur-font
                                    relative inline-flex items-center justify-center
                                    px-5 py-2.5 rounded-lg font-semibold
                                    text-white tracking-wide
                                    bg-linear-to-r from-indigo-700 to-cyan-400 
                                    shadow-[0_0_12px_rgba(139,92,246,0.4)]
                                    hover:shadow-[0_0_16px_rgba(139,92,246,0.6)]
                                    transition-all duration-300 hover:scale-110 
                                    cursor-pointer me-4"
                        >
                            Resume
                            <FontAwesomeIcon icon={faDownload} className="ml-2" />
                        </a>

                        <div className="flex space-x-4 text-violet-200 mt-4 hover:">
                            <a
                                href="https://www.linkedin.com/in/fathimathulraifa-np"
                                target="_blank"
                                rel="noopener noreferrer"  // security best practice
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-2xl text-cyan-300 animate-bounce-delay-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_#15cde6] hover:text-cyan-400"
                                />
                            </a>
                            <a
                                href="https://github.com/Raifa509"
                                target="_blank"
                                rel="noopener noreferrer"  // security best practice
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-2xl text-cyan-300 animate-bounce-delay-2 transition-all duration-300 hover:drop-shadow-[0_0_10px_#15cde6]"
                                />
                            </a>

                            <a href="mailto:fathimathulraifanp@gmail.com">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-2xl text-cyan-300 animate-bounce-delay-3 transition-all duration-300 hover:drop-shadow-[0_0_10px_#15cde6] hover:text-cyan-400"
                                />
                            </a>
                        </div>



                    </div>
                </motion.div>



                {/* image div */}
                <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.8 }} 
                    animate={{ opacity: 1, x: 0, scale: 1 }}   
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                     className=" order-1 md:order-2 flex items-center justify-center">
                    <div className="relative md:w-[400px] w-[300px] h-[300px] md:h-[400px] rounded-full md:-mt-20">

                        <div className="absolute inset-0 rounded-full p-[3px] animate-glow-gradient">
                            <div className="w-full h-full rounded-full bg-linear-to-br from-cyan-300 to-violet-400 blur-[6px] opacity-70"></div>
                        </div>
                        {/* Image container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover object-top scale-100"
                                src="avatar.png"
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