import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.63px;
  text-transform: uppercase;
  padding: 23px 30px;
  box-shadow: rgba(3, 3, 3, 0.12) 0px 32px 54px;
  border-radius: 50rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  user-select: none;
  /* transform: perspective(1px) translateZ(0px); */
  position: relative;
  overflow: hidden;
  border: none;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  background-color: rgb(86, 179, 129);
  transition: all 0.4s ease-out 0s;
  outline: none !important;
  cursor: pointer;
  z-index: 49;
`;
export default function ButtonLarge({ children }) {
  return (
    <Button
      whileHover={{
        y: -10,
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </Button>
  );
}
