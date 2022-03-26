/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import Card from '../layout/card';
import { fade } from '../../utils/framer';

const Modal = ({ children, handleClose, isOpen, dialogue }) => {
  return (
    <AnimatePresence>
      {!!isOpen && (
        <article tw='fixed w-full h-full top-0 left-0 flex items-center justify-center overflow-y-scroll z-10'>
          <motion.div
            initial={fade.hidden}
            animate={fade.visible(0.8)}
            exit={fade.hidden}
            transition={fade.transition(0.5)}
            tw='fixed w-full h-full bg-gray-900'
            onClick={handleClose}
          />
          <Card.Base
            modal={1}
            dialogue={dialogue}
            initial={fade.hidden}
            animate={fade.visible(1)}
            exit={fade.hidden}
            transition={fade.transition(0.5)}
          >
            <div tw='absolute top-4 right-2' onClick={handleClose}>
              <AiOutlineClose size='1.2em' />
            </div>
            <Card.Body>{children}</Card.Body>
          </Card.Base>
        </article>
      )}
    </AnimatePresence>
  );
};

export default Modal;
