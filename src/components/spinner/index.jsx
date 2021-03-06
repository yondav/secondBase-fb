/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { drawPath } from '../../utils/framer';

const Spinner = () => {
  return (
    <div tw='flex justify-center items-center w-full stroke-current'>
      <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'>
        <g>
          <motion.path
            initial={drawPath().hidden}
            animate={drawPath('infinit').visible}
            fill='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.8,78.46V78c0-7.78,5.12-15.83,16.22-24.24,8.63-6.58,11-8.67,11-14.62,0-5.4-2.87-9.49-9.34-9.49s-9.58,3.4-10.71,10h-7c.95-9.11,6.77-16,17.75-16,12.07,0,16.76,7.76,16.76,15.31C43.41,47.1,40,50.29,30,58,22.59,63.71,18.63,68,17.29,72.13H45.54l-1,6.33Z'
          />
          <motion.path
            initial={drawPath().hidden}
            animate={drawPath('infinit').visible}
            fill='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M49.85,21.54H71.69c12,0,17.63,6.33,17.63,14.22,0,6.61-3.8,10.92-8.16,12.4a14.06,14.06,0,0,1,10,13.63c0,10.73-8.19,16.67-19,16.67H49.85Zm20.4,23.67c8.24,0,11.46-3.25,11.46-8.8,0-5-3.61-8.63-10.3-8.63H57.25V45.21Zm-13,27H71.31c7.15,0,12.12-3.35,12.12-10.45,0-6.18-4-10.33-13.56-10.33H57.25Z'
          />
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
