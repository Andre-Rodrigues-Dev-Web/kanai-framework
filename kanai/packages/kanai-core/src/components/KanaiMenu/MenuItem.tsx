import React from 'react';
import { MenuItemLink } from './style';

interface MenuItemProps {
  to: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, children }) => {
  return <MenuItemLink to={to}>{children}</MenuItemLink>;
};

export default MenuItem;
