import React from 'react'
import { ShoppingBagIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const NavIcons = () => {
  return (
    <div className="flex space-x-6">
      <MagnifyingGlassIcon className="w-6 h-6"/>
      <UserCircleIcon className="w-6 h-6"/>
      <ShoppingBagIcon className="w-6 h-6"/>
      <div>
        <span className="uppercase">no</span>
      </div>
    </div>
  )
}

export default NavIcons