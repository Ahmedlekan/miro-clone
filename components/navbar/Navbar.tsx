import React from 'react'
import Logo from './_components/Logo'
import {Menu} from './_components/Menu'
import ActionButtons from './_components/ActionButtons'


const Navbar = () => {

  const navbarClasses = `
    flex items-center justify-between space-x-10 bg-[#fff] h-20
    sticky top-0 z-50 border-b border-gray-200 px-10
  `;

  return (
    
    <div className={navbarClasses}>
      <div className="flex items-center justify-center gap-5">
        <Logo />
        <Menu />  
      </div>
      
      <ActionButtons />
    </div>
  )
}

export default Navbar