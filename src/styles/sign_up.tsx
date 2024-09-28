import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: -0.8rem 0 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #16a085;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1;
  padding: 2rem;
  border-radius: 8px;
`;

export const Input = styled(motion.input)`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
`;

export const Button = styled(motion.button)`
  padding: 0.7rem;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;