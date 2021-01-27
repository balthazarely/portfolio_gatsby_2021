const duration = 0.25;

export const pageTransitionOne = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration },
  },
};
