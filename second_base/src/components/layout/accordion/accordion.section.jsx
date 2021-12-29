/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';
import { BsChevronCompactDown } from 'react-icons/bs';
import { fade, growHeight } from '../../../utils/framer';

const StyledButton = styled(motion.button)`
  ${tw`p-4 text-xl flex justify-between items-center rounded-md dark:hover:bg-gray-900 hover:shadow-lg focus:outline-none transition-all duration-300 ease-in`}
`;

const Button = ({ title, setActive, active }) => (
  <StyledButton onClick={() => setActive(!active)}>
    <h2>{title}</h2>
    <BsChevronCompactDown
      style={{
        transform: active && 'rotate(180deg)',
        transition: '300ms all ease-in-out',
      }}
    />
  </StyledButton>
);

const Section = ({ title, setActive, active, children }) => (
  <article tw='w-full p-4 flex flex-col'>
    <Button title={title} active={active} setActive={setActive} />

    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ ...fade.hidden, ...growHeight.hidden }}
          animate={{ ...fade.visible(1), ...growHeight.visible }}
          exit={{ ...fade.hidden, ...growHeight.hidden }}
          transition={{ ...fade.transition(0.3), delay: 0.1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </article>
);

export default Section;
