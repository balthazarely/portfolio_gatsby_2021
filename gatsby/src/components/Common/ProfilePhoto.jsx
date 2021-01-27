import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoints';

const ProfileWrapper = styled(motion.div)`
  background: greenyellow;
  border-radius: 50%;
  width: 130px;
  height: 130px;
`;

export default function ProfilePhoto() {
  return <ProfileWrapper />;
}
