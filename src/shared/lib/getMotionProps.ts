interface IOptions {
  y?: number;
  rotate?: number;
  delay?: number;
}

export const getMotionProps = (options?: IOptions) => ({
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 0 },
  initial: { opacity: 0, x: 100, y: options?.y, rotate: options?.rotate },
  transition: { duration: 0.6, delay: options?.delay },
});
