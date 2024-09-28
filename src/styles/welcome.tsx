import { motion } from "framer-motion";
import { styled } from "styled-components";

export const WelcomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #8e44ad, #3498db);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const WelcomeMessage = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const SubHeading = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
`;