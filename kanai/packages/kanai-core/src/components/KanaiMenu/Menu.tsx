import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  Navbar,
  Brand,
  MenuLinks,
  SearchInput,
  Hamburger
} from './style';

interface MenuLink {
  path: string;
  label: string;
}

interface MenuProps {
  brand: string;
  links: MenuLink[];
}

const KanaiMenu: React.FC<MenuProps> = ({ brand, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <Brand to="/">{brand}</Brand>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </Hamburger>
      <MenuLinks isOpen={isOpen}>
        {links.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
        <SearchInput type="text" placeholder="Search..." />
      </MenuLinks>
    </Navbar>
  );
};

export default KanaiMenu;
