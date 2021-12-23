import tw, { styled, css } from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineDelete } from 'react-icons/ai';

// overlay div used for hover effects
export const Overlay = styled(motion.div)(({ deleteicon, editicon, shaded }) => [
  tw`absolute top-0 left-0 h-full w-full flex justify-center items-center transition duration-500 ease-in`,
  css`
    & svg {
      ${tw`cursor-pointer`}
    }
  `,
  deleteicon && tw`text-red-900`,
  editicon && tw`text-blue-900`,
  shaded && tw`opacity-20 bg-gray-950 dark:(bg-gray-50 opacity-20)`,
]);

// delete icon overlay for images
export const DeleteOverlay = ({ dialogueAction }) => (
  <AnimatePresence>
    <Overlay
      deleteicon={1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: [0, 2.5, 1], transition: { duration: 0.5, ease: 'easeIn' } }}
      exit={{ opacity: 0, transition: { duration: 0.1, ease: 'easeIn' } }}
    >
      <AiOutlineDelete size='3.5em' onClick={dialogueAction} />
    </Overlay>
  </AnimatePresence>
);
