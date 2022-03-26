/** @jsxImportSource @emotion/react */
import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';

// hero image component
const HeroStyles = styled.div`
  ${tw`w-full`}

  & .hero-inner {
    ${tw`relative h-screen text-center bg-no-repeat bg-center bg-fixed bg-cover`}
  }
`;

const Hero = ({ url, color, onScroll }) => (
  <HeroStyles>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
      className='hero-inner'
      style={{
        backgroundImage: `url(${url})`,
        filter: !color && `saturate(0)`,
      }}
    ></motion.div>
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, repeat: Infinity, repeatType: 'reverse' }}
      onClick={onScroll}
      tw='absolute p-3 bottom-0 right-0 w-24 sm:w-28 md:w-32 cursor-pointer'
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.24 33.39'>
        <path
          d='M7.4,0.8v23.7c0,0.4-0.3,0.7-0.7,0.7l-5.4,0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.2,0.5l6.1,6.1c0.3,0.3,0.7,0.3,1,0l1.7-1.6'
          fill='none'
          stroke='#efefed'
          strokeMiterlimit={10}
          strokeLinecap='round'
        />
      </svg>
    </motion.div>
  </HeroStyles>
);

export default Hero;
