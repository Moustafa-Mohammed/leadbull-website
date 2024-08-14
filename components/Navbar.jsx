'use client';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import Button from './Button';
import links from '@/utils/links';
import { useState } from 'react';
import NavMenu from '@/components/NavMenu';
import HamburgerMenu from './HamburgerMenu';
import { IoMdLogIn } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-black/90 py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center lg:px-0">
        <div className="flex items-center justify-between md:justify-start gap-6">
          <div className="w-24 md:w-28 lg:w-32 xl:w-36">
            <Image src={logo} alt="logo" className="object-contain" />
          </div>

          <NavMenu isOpen={isOpen} links={links} />
        </div>

        <div className="hidden md:flex lg:hidden gap-6">
          <Button color="gradient">
            <IoMdLogIn className="w-8 h-8 " />
          </Button>
          <Button color="gradient">
            <MdDateRange className="w-8 h-8" />
          </Button>
        </div>
        <div className="hidden lg:flex gap-6">
          <Button color="transparent" size="lg">
            Login
          </Button>
          <Button color="gradient" size="lg">
            Book an appointment
          </Button>
        </div>
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
