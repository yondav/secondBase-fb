/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { drawPath, fade } from '../../utils/framer';

const StyledAlert = styled(motion.div)(({ variant }) => [
  tw`absolute bottom-0 left-0 w-full h-10`,
  variant === 'success' && tw`bg-green-300 text-green-900`,
  variant === 'danger' && tw`bg-red-300 text-red-900`,
]);
const Alert = ({ variant, message }) => {
  return (
    <StyledAlert
      initial={fade.hidden}
      animate={fade.visible(1)}
      exit={fade.hidden}
      transition={fade.transition(0.3, 0.2)}
      variant={variant}
    >
      <div tw='relative w-full h-full flex justify-center items-center'>
        <svg
          tw='h-8 w-8 absolute left-1 top-1 text-current p-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 18.35 13.53'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            initial={drawPath().hidden}
            animate={drawPath().visible}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={
              variant === 'success'
                ? 'M.38,6.49l5.49,6.25a.76.76,0,0,0,1.19,0L18,.33'
                : 'M10.81,12.2.85.87 M.85,12.2,10.81.87'
            }
          ></motion.path>
        </svg>
        <p>{message}</p>
      </div>
    </StyledAlert>
  );
};

export default Alert;
