'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
interface ComponentProps extends React.ComponentProps<typeof motion.div> {
  delay?: number;
  duration?: number;
}

const Reveal: FC<ComponentProps> = ({
  children,
  className,
  duration = 1,
  delay = 0.07,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    margin: '-10px',
  });
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);
  return (
    <div ref={ref} className="min-h-[150px] w-full">
      {isInView ? (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: '-50%' },
            visible: { opacity: 1, x: 0 },
          }}
          initial={'hidden'}
          animate={controls}
          transition={{ duration, delay }}
          className={className}
          {...props}
        >
          {children}
        </motion.div>
      ) : null}
    </div>
  );
};

export default Reveal;
