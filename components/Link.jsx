'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link, className }) => {
  const pathname = usePathname();

  const isActive = pathname === link.href;
  return (
    <Link
      href={link.href}
      key={link.href}
      className={`relative text-white px-2 py-1.5  lg:text-xl font-bold after:content-[''] after:block after:w-0 after:h-0.5  after:rounded-full after:bg-gradient-to-r from-[#B10028] to-[#027FCA] ${
        isActive ? 'after:w-full' : ''
      } after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer ${className}`}
    >
      {link.name}
    </Link>
  );
};

Link.propTypes = {
  link: PropTypes.node.isRequired,
};

export default NavLink;
