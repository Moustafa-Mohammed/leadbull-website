import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import { TfiClose } from 'react-icons/tfi';

const HamburgerMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="cursor-pointer">
        {isOpen ? <TfiClose size={28} /> : <VscMenu size={30} />}
      </button>
    </div>
  );
};

export default HamburgerMenu;
