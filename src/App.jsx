import About from './About';
import './App.css'
import Particles from './Components/Particles';
import Education from './Education';
import Experience from './Experience';
import Header from './Header';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Skills from './Skills';


function App() {


  return (
    <>
      
      <div className="bg-gray-950 w-full relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#b82eea", "#9346af"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Overlayed content */}
        <div className="relative z-10  min-h-screen">
          <Header />
          <LandingPage />
        </div>
      </div>
      <About />
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>

    </>
  )
}

export default App
