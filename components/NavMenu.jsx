import React from 'react';
import NavLink from '@/components/Link';
import Button from '@/components/Button';
import { IoMdLogIn } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';

const NavMenu = ({ isOpen, links }) => {
  return (
    <ul
      className={`${
        isOpen ? 'flex' : 'hidden'
      } flex-col md:flex-row gap-2 py-4 items-center bg-black md:bg-transparent absolute top-16 left-0 right-0 md:static md:flex md:gap-6 md:mt-0 transition-transform duration-500 ease-in-out transform md:transform-none ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {links.map((link) => (
        <NavLink key={link.href} link={link} />
      ))}
      {/* Mobile buttons */}
      {isOpen && (
        <div className="flex gap-4 items-center mt-4 md:hidden">
          <Button color="gradient">
            <IoMdLogIn className="w-8 h-8 " />
          </Button>
          <Button color="gradient">
            <MdDateRange className="w-8 h-8" />
          </Button>
        </div>
      )}
    </ul>
  );
};

export default NavMenu;
