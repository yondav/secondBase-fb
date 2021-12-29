/** @jsxImportSource @emotion/react */
import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';

const StyledBase = styled(motion.div)(({ login, full, modal, dialogue }) => [
  tw`relative p-4 flex flex-col bg-gray-300 dark:bg-gray-950 m-auto container rounded-md w-full overflow-hidden transition-all duration-300 ease-in-out`,

  login && tw`sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 py-8`,

  full &&
    css`
      ${tw`rounded-none p-0`}
      background-color: transparent !important;
      min-width: 100vw;
      min-height: fit-content;
    `,

  modal && tw`w-full md:w-11/12 lg:w-3/4 mx-auto rounded-lg shadow-lg z-50 overflow-y-auto`,
  dialogue && tw`w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3`,
]);

const Base = ({ login, full, modal, dialogue, children, innerRef, ...rest }) => (
  <StyledBase
    ref={innerRef}
    login={login ? 1 : undefined}
    full={full ? 1 : undefined}
    modal={modal ? 1 : undefined}
    dialogue={dialogue ? 1 : undefined}
    {...rest}
  >
    {children}
  </StyledBase>
);

export default Base;
