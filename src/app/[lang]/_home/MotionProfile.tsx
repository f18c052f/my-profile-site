import React from 'react';
import { useRef, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import Top from './Top';
import './styles.css';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>{children}</div>
      <motion.h2 style={{ y }}>{title}</motion.h2>
    </section>
  );
}

const MotionProfile: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const titles = [
    '',
    'ABOUT ME',
    'EXPERIENCE',
    'CERTIFICATIONS',
    'SKILLS',
    'HOBBIES',
  ];

  return (
    <>
      {titles.map((title, index) => (
        <Section key={index} title={title}>
          {(function () {
            switch (index) {
              case 0:
                return <Top />;
              case 1:
                return <p>TEST2</p>;
              default:
                return <span>{`${title} content is none.`}</span>;
            }
          })()}
        </Section>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

export default MotionProfile;
