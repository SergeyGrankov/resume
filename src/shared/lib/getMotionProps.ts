export const getMotionProps = (delay = 0) => ({
  whileInView: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: 100 },
  transition: { duration: 0.6, delay },
});
