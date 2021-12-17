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
