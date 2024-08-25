interface IOptions {
  y: number;
}

export const getMotionProps = (delay = 0, options?: IOptions) => ({
  whileInView: { opacity: 1, x: 0, y: 0 },
  initial: { opacity: 0, x: 100, y: options?.y },
  transition: { duration: 0.6, delay },
});
