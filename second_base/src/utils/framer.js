// svg draw path animation - alert and loading
export const drawPath = repeat => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: repeat ? 0 : 1,
        type: 'spring',
        duration: repeat ? 3 : 1.5,
        bounce: 0,
        repeat: repeat && Infinity,
      },
      opacity: {
        delay: repeat ? 0 : 1,
        duration: 0.01,
        repeat: repeat && Infinity,
      },
    },
  },
});

// fade animation - modal overlay, accordian section
export const fade = {
  hidden: { opacity: 0 },
  visible: opacity => ({ opacity }),
  transition: duration => ({ duration, ease: 'easeInOut' }),
};

// grow from 0 height to element height - modal, accordian section
export const growHeight = {
  hidden: { height: 0 },
  visible: { height: 'auto' },
  transition: duration => ({ duration, ease: 'easeInOut' }),
};
