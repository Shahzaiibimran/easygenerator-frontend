import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/auth';
import {
  NavbarContainer,
  NavBrand,
  NavMenu,
  NavItem,
  NavButton
} from '../styles/navbar';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <NavbarContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <NavBrand
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Auth App
      </NavBrand>
      <NavMenu>
        {isAuthenticated ? (
          <NavButton
            whileHover={{ scale: 1.1, backgroundColor: '#e74c3c' }}
            whileTap={{ scale: 0.95 }}
            onClick={logout}
          >
            Logout
          </NavButton>
        ) : (
          <>
            <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/sign-in">Sign In</Link>
            </NavItem>
            <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/sign-up">Sign Up</Link>
            </NavItem>
          </>
        )}
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;