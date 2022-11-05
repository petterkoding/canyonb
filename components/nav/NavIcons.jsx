import React from 'react'
import { ShoppingBagIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const NavIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      <MagnifyingGlassIcon className="w-6 h-6"/>
      <UserCircleIcon className="w-6 h-6"/>
      <ShoppingBagIcon className="w-6 h-6 text-gray-500"/>
      <div className="flex items-center">
        <span className="uppercase">no</span>
        <img src={"/noflag.png"} alt="The Norwegian flag" className="h-6 w-auto ml-2"/>
      </div>
    </div>
  )
}

export default NavIcons