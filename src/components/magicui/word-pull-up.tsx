'use client';

import { motion, Variants } from 'framer-motion';

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.span
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={className}
    >
      {words.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: 'inline-block', paddingRight: '8px' }}
        >
          {word === '' ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.span>
  );
}
