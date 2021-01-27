import React from 'react';
import { useViewportScroll, motion, useTransform } from 'framer-motion';

export default function SimpleParralax({ children, ...props }) {
  const { strength } = props;

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -strength]);

  return <motion.div style={{ y: y1, x: 0 }}>{children}</motion.div>;
}
