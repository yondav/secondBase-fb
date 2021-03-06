import { motion } from 'framer-motion';
import { fade } from '../../utils/framer';

const Logo = ({ invert }) => {
  const fill = invert ? '#2a2829' : '#e0e0db';
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' viewBox='0 0 626.34 100'>
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 0.5) }}
        d='M11.68,79c1.94,7.43,7.44,11.8,16.65,11.8,10,0,13.91-4.31,13.91-10.48,0-6.36-3.12-9.31-16.09-12.45C6.72,63.09,2.67,57.16,2.67,47.93c0-9.63,7.07-19.1,24.54-19.1S51.91,39,52.79,48.44H41.44c-1-4.39-4.3-10.51-14.74-10.51-9.52,0-12.35,4.58-12.35,9,0,5.07,2.79,7.58,15.25,10.56C50.2,62.42,54.32,69.3,54.32,79.4,54.32,91.31,44.88,100,28,100c-17.6,0-26.23-8.89-28-21Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 0.6) }}
        d='M67.15,66.55c.08,13.82,7,23.64,18.58,23.64,10.74,0,14.22-5.54,16.4-10.51H114C111.28,88.38,104,100,85.36,100,64,100,55.28,82.63,55.28,65.14c0-20.21,10.18-36.31,30.84-36.31,21.92,0,29.1,17.58,29.1,32.08,0,2.06,0,3.8-.18,5.64Zm36.17-8.27C103.18,47.1,97.56,38.11,86,38.11c-12,0-17.21,8.32-18.4,20.17Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 0.7) }}
        d='M175.27,77.6c-2.89,11.7-10.8,22.4-28.09,22.4-18.7,0-30.29-13.46-30.29-35.22,0-19.22,10.87-35.95,31.14-35.95,19.59,0,26.36,14,27.24,22.72H163.64c-1.68-6.92-6-12.91-15.84-12.91-12,0-18.83,10.3-18.83,25.73s6.61,25.87,18.4,25.87c8.5,0,13.45-4.53,16.22-12.64Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 0.8) }}
        d='M239.14,64.28c0,19.58-11.23,35.72-32,35.72-19.47,0-31.25-15.07-31.25-35.49,0-20.07,11.54-35.68,32-35.68C226.77,28.83,239.14,43,239.14,64.28ZM188,64.41c0,14.91,7.43,25.78,19.65,25.78,12.43,0,19.42-10.31,19.42-25.73s-7-25.82-19.69-25.82S188,48.9,188,64.41Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 0.9) }}
        d='M245.1,47.56c0-5.9,0-11.86-.13-17.13h11.4c.32,2,.5,9.15.46,11.17,2.71-5.84,8.26-12.77,21.4-12.77,12.73,0,22.7,7.79,22.7,25.86v43.7H289.2V56.18c0-10.26-4-17.18-14.39-17.18-12.81,0-18,9.76-18,23.41v36H245.1Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 1) }}
        d='M368.05,0V79.19c0,6.38,0,12.64.13,19.2H356.91a93.67,93.67,0,0,1-.59-9.64C353,95.83,346.08,100,334.94,100c-17.47,0-28.21-14.16-28.21-34.88,0-20.92,11.58-36.29,30.38-36.29,12,0,17.39,4.86,19.21,8.67V0ZM318.91,64.76c0,16.41,7.81,25.29,18.48,25.29,15.89,0,19.38-11.72,19.38-26.63,0-15.1-3.15-24.64-18.46-24.64C326.33,38.78,318.91,48.27,318.91,64.76Z'
        fill={fill}
      />
      {/* B */}
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 1.5) }}
        d='M381.57,5.15h35.79c19.71,0,28.89,10.37,28.89,23.29,0,10.84-6.23,17.88-13.39,20.31,6.52,2.07,16.45,8.64,16.45,22.33,0,17.58-13.41,27.31-31.08,27.31H381.57ZM415,43.92c13.51,0,18.78-5.32,18.78-14.42,0-8.25-5.91-14.14-16.86-14.14h-23.2V43.92ZM393.71,88.18h23c11.71,0,19.85-5.5,19.85-17.12,0-10.13-6.5-16.93-22.22-16.93H393.71Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 1.6) }}
        d='M507.14,83.57a105.4,105.4,0,0,0,.94,14.82H496.85a38,38,0,0,1-1.11-8.89C493.37,94,488,100,474.76,100c-16,0-22.86-10.43-22.86-20.77,0-15.17,11.91-22.1,32.11-22.1H495.6V51.34c0-6-1.91-13.31-14.63-13.31-11.35,0-13.27,5.63-14.5,10.93H455.11c.9-9.36,6.69-20.18,26.23-20.13,16.61,0,25.8,6.81,25.8,22.26ZM495.69,65.26h-11c-13.55,0-20.8,3.75-20.8,13.33,0,7.06,4.84,12.21,13.23,12.21,16.36,0,18.57-11,18.57-23.36Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 1.7) }}
        d='M522.79,79c2,7.43,7.45,11.8,16.66,11.8,10,0,13.91-4.31,13.91-10.48,0-6.36-3.13-9.31-16.09-12.45-19.43-4.73-23.48-10.66-23.48-19.89,0-9.63,7.06-19.1,24.53-19.1S563,39,563.91,48.44H552.56c-1-4.39-4.3-10.51-14.74-10.51-9.53,0-12.35,4.58-12.35,9,0,5.07,2.79,7.58,15.25,10.56,20.6,4.89,24.72,11.77,24.72,21.87,0,11.91-9.44,20.6-26.36,20.6-17.6,0-26.23-8.89-28-21Z'
        fill={fill}
      />
      <motion.path
        initial={fade.hidden}
        animate={{ ...fade.visible(1), transition: fade.transition(0.6, 1.8) }}
        d='M578.27,66.55c.08,13.82,7,23.64,18.57,23.64,10.75,0,14.23-5.54,16.41-10.51h11.82c-2.68,8.7-10,20.32-28.59,20.32-21.37,0-30.08-17.37-30.08-34.86,0-20.21,10.18-36.31,30.84-36.31,21.92,0,29.1,17.58,29.1,32.08,0,2.06,0,3.8-.18,5.64Zm36.17-8.27c-.14-11.18-5.76-20.17-17.38-20.17-11.95,0-17.2,8.32-18.39,20.17Z'
        fill={fill}
      />
    </svg>
  );
};

export default Logo;
