/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { Card } from '../../styles';
import { fade, growHeight } from '../../utils/framer';

const Modal = ({ children, handleClose, isOpen }) => {
  return (
    <AnimatePresence>
      {!!isOpen && (
        <article tw='fixed w-full h-full top-0 left-0 flex items-center justify-center overflow-y-scroll z-10'>
          <motion.div
            initial={fade.hidden}
            animate={fade.visible(0.4)}
            exit={fade.hidden}
            transition={fade.transition(0.5)}
            tw='fixed w-full h-full bg-gray-900 opacity-60'
            onClick={handleClose}
          />
          <Card.Base
            modal={1}
            initial={fade.hidden}
            animate={fade.visible(1)}
            exit={fade.hidden}
            transition={fade.transition(0.5)}
          >
            <Card.Header>
              <div
                tw='flex justify-end w-full cursor-pointer z-50'
                onClick={handleClose}
              >
                <AiOutlineClose size='1.2em' />
              </div>
            </Card.Header>
            <Card.Body>{children}</Card.Body>
          </Card.Base>
        </article>
      )}
    </AnimatePresence>
  );
};

export default Modal;
