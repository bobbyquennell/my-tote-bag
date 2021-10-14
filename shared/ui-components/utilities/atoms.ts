import * as resetStyles from './reset.css'; // order matters, reset.css has to be imported first !!!
import { sprinkles } from './atomic.css';
export type Sprinkles = Parameters<typeof sprinkles>[0];
export interface AtomicProps extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
}
export const generateAtomicClasses = ({ reset, ...rest }: AtomicProps) => {
  if (!reset) {
    const atomicClasses = sprinkles(rest);
    return `${atomicClasses ? ` ${atomicClasses}` : ''}`;
  }
  // reset
  const elementReset =
    resetStyles.element[reset as keyof typeof resetStyles.element];

  const sprinklesClasses = sprinkles(rest);

  return `${resetStyles.base}${elementReset ? ` ${elementReset}` : ''}${
    sprinklesClasses ? ` ${sprinklesClasses}` : ''
  }`;
};
