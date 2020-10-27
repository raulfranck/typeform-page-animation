import React from 'react';
import { motion, useTransform, useViewportScroll, } from 'framer-motion';


import { Container } from './styles';
import { Sticky } from '../../styles';

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.551, 0.8]);


  return <Sticky className="second">
    <motion.div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100vh',
      borderRadius: '4px',
      border: '4px solid #fff',
      opacity: frameOpacity,
    }} />

  </Sticky>
};

const First: React.FC = () => {
  return (
    <Sticky className="first"></Sticky>
  )
}

export default FirstAndSecond;
