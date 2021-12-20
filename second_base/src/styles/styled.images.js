import tw, { styled, css } from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineDelete } from 'react-icons/ai';

const HeroStyles = styled.div`
  ${tw`w-full`}

  & .hero-inner {
    ${tw`h-screen text-center bg-no-repeat bg-center bg-fixed bg-cover`}
  }
`;

export const Hero = ({ url, color }) => (
  <HeroStyles>
    <div
      className='hero-inner'
      style={{
        backgroundImage: `url(${url})`,
        filter: !color && `saturate(0)`,
      }}
    ></div>
  </HeroStyles>
);

export const Container = styled.div(({ square, circle, color }) => [
  tw`relative overflow-hidden w-full rounded-lg`,

  square &&
    css`
      ${tw`before:block`}

      &:before {
        content: '';
        padding-top: 100%;
      }

      & img {
        ${tw`absolute top-1/2 left-1/2 -translate-y-1/2	-translate-x-1/2`}
      }
    `,

  circle && tw`rounded-full`,

  !color &&
    css`
      filter: saturate(0);
    `,
]);

const Overlay = styled(motion.div)`
  ${tw`absolute top-0 left-0 h-full w-full flex justify-center items-center text-red-900 transition duration-500 ease-in`}
  & svg {
    ${tw`cursor-pointer`}
  }
`;

export const DeleteOverlay = ({ dialogueAction }) => (
  <AnimatePresence>
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: [0, 2.5, 1], transition: { duration: 0.5, ease: 'easeIn' } }}
      exit={{ opacity: 0, transition: { duration: 0.1, ease: 'easeIn' } }}
    >
      <AiOutlineDelete size='3.5em' onClick={dialogueAction} />
    </Overlay>
  </AnimatePresence>
);
