import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
const MenuBar = () => {
  return (
    <div className="px-4 py-4 h-18 bg-white border-b-[1px]">
      <div className="rounded-full w-12 h-12 cursor-pointer  p-2 flex border-[1px] rounded-full hover:bg-gray-100 items-center justify-center transition-all ease-in-out duration-50">
        <HiOutlineMenu className="text-2xl text-gray-600" />
      </div>
    </div>
  );
};

export default MenuBar;
