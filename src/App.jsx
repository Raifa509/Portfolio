import './App.css'
import Header from './Header';
import LandingPage from './LandingPage';
import Particles from './Particles';

function App() {


  return (
    <>
      <Header />
      <div className="bg-gray-950 h-164 w-full relative overflow-hidden">
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
          <LandingPage />
        </div>
      </div>


    </>
  )
}

export default App
