import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <>
    <div className='h-10 bg-gray-950 flex items-center justify-between nova-font py-12 px-15 text-[25px]'>
        <h1>Raifa<span className="text-accent ">&lt;/&gt;</span></h1>
        <FontAwesomeIcon icon={faBars}/>
    </div>
    
    </>
  )
}

export default Header