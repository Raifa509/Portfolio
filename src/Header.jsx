import { faBars, faCode, faEnvelope, faHome, faInfoCircle, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Header() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div className='h-10 bg-gray-950 text-cyan-300 flex items-center justify-between tektur-font py-12 px-15 text-[25px] tracking-[-1px]'>
        <h1>Raifa<FontAwesomeIcon icon={faCode} className='ms-1'/></h1>
        <FontAwesomeIcon icon={faBars} onClick={() => setModal(!modal)} />
      </div>

      <div
        className={`
    fixed top-0 right-0 h-screen w-64
    backdrop-blur-lg
    bg-linear-to-b from-violet-600/30 to-cyan-400/30
    border-l border-white/30
    transform transition-transform duration-300 shadow-xl
    ${modal ? 'translate-x-0' : 'translate-x-full'}
    flex flex-col justify-center items-start p-10 space-y-6 z-50
  `}
      >
        <a
          href="#home"
          className="text-white text-2xl font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-cyan-300"
          onClick={() => setModal(false)}
        ><FontAwesomeIcon icon={faHome} className='me-2'/>
          Home
        </a>
        <a
          href="#about"
          className="text-white text-2xl font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-cyan-300"
          onClick={() => setModal(false)}
        ><FontAwesomeIcon icon={faInfoCircle} className='me-2'/>
          About
        </a>
        <a
          href="#projects"
          className="text-white text-2xl font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-cyan-300"
          onClick={() => setModal(false)}
        ><FontAwesomeIcon icon={faCode} className='me-2'/>
          Projects
        </a>
        <a
          href="#contact"
          className="text-white text-2xl font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-cyan-300"
          onClick={() => setModal(false)}
        ><FontAwesomeIcon icon={faEnvelope} className='me-2'/>
          Contact
        </a>
      </div>

      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>
      )}
    </>
  )
}

export default Header