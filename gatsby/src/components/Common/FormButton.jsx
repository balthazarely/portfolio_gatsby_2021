import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DefaultColors } from '../../styles/ColorScheme';

const Button = styled(motion.button)`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.63px;
  text-transform: uppercase;
  padding: 18px 25px;
  box-shadow: rgba(3, 3, 3, 0.12) 0px 32px 54px;
  border-radius: 50rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  user-select: none;
  /* transform: perspective(1px) translateZ(0px); */
  position: relative;\
  overflow: hidden;
  border: none;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  background: ${(props) => props.highlight};
  transition: all 0.4s ease-out 0s;
  outline: none !important;
  cursor: pointer;
  z-index: 49;
  margin-top: 15px;
  margin-right: 10px;
`;

export default function FormButton({ children }) {
  return (
    <>
      <Button
        highlight={DefaultColors.highlight}
        whileHover={{
          y: -10,
          transition: { duration: 0.25 },
        }}
      >
        {children}
      </Button>
    </>
  );
}
