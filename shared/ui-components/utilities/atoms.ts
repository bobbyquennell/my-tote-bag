import { sprinkles } from './atomic.css';

export type AtomicProps = Parameters<typeof sprinkles>[0];
export const generateAtomicClasses = (atomicProps: AtomicProps) => {
  const atomicClasses = sprinkles(atomicProps);

  return `${atomicClasses ? ` ${atomicClasses}` : ''}`;
};
