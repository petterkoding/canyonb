import React from "react";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const NavIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      <MagnifyingGlassIcon className="w-6 h-6" />
      <UserCircleIcon className="w-6 h-6" />
      <ShoppingBagIcon className="w-6 h-6 text-gray-500" />
      <div className="flex items-center">
        <span className="uppercase">no</span>
        <Image
          src={"/noflag.png"}
          width={24}
          height={24}
          alt="The Norwegian flag"
          className="h-6 w-auto ml-2"
        />
      </div>
    </div>
  );
};

export default NavIcons;
