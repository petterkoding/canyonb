import React from "react";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className="block w-6 h-4 relative cursor-pointer lg:hidden"
    >
      <span className="w-full h-[2px] bg-black/80 absolute top-0 left-0"></span>
      <span className="w-full h-[2px] bg-black/80 absolute top-[50%] left-0 translate-y-[-50%]"></span>
      <span className="w-full h-[2px] bg-black/80 absolute bottom-0 left-0"></span>
    </div>
  );
};

export default MobileMenu;
