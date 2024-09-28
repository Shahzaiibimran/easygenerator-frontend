import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const NavbarContainer = styled(motion.nav)`
  background: linear-gradient(to right, #8e44ad, #3498db);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBrand = styled(motion.h1)`
  color: #ecf0f1;
  font-size: 1.8rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const NavMenu = styled(motion.ul)`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled(motion.li)`
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  color: #ecf0f1;
  transition: color 0.3s ease;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #f39c12;
  }
`;

export const NavButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #c0392b;
  }

  &:active {
    transform: scale(0.95);
  }
`;