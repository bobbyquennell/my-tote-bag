import { sprinkles } from './sprinkles.css';

export type Atoms = Parameters<typeof sprinkles>[0];
export const atoms = (atoms: Atoms) => {
  const atomicClasses = sprinkles(atoms);

  return `${atomicClasses ? ` ${atomicClasses}` : ''}`;
};
