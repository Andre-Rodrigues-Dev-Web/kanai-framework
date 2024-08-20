import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Brand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const MenuLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuItemLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
