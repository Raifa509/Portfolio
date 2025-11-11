import React from 'react'
import TextType from './TextType'
import GradientText from './GradientText'

function LandingPage() {
    return (
        <>
            <div className="grid grid-cols-2 text-white h-screen">
                <div className="flex flex-col mt-50 text-center text-white ms-32">
                    <h1 className="text-3xl font-light tracking-wide text-gray-300">
                        Hi 👋, I'm
                    </h1>                   
                    <GradientText
                        colors={["#e879f9", "#a78bfa", "#22d3ee", "#a78bfa", "#e879f9"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class text-6xl leading-20 font-extrabold"
                    >
                        Fathimathul Raifa NP
                    </GradientText>

                    <div className="mt-2 text-2xl font-medium tracking-wide  text-gray-300">
                        <TextType
                            text={["Full-Stack Developer", "Frontend Developer", "Backend Developer"]}
                            typingSpeed={120}
                            pauseDuration={1500}
                            deletingSpeed={100}
                            showCursor={true}
                            cursorCharacter="_"
                        />
                    </div>
                </div>



                {/* image div */}
                <div className="flex items-center justify-center">
                    <div className="relative w-[400px] h-[400px] rounded-full -mt-20">

                        <div className="absolute inset-0 rounded-full p-[3px] animate-glow-gradient">
                            <div className="w-full h-full rounded-full bg-linear-to-br from-violet-600 blur-[6px] opacity-70"></div>
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
                </div>


            </div>

        </>
    )
}

export default LandingPage