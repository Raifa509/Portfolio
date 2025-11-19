import About from './About';
import './App.css'
import Particles from './Components/Particles';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Skills from './Skills';


function App() {


  return (
    <>

      <div className="bg-gray-950 w-full relative overflow-hidden min-h-screen">
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
        <div className="relative z-10 min-h-screen lg:min-h-0">
          <Header />
          <LandingPage />
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
