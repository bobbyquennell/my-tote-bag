import clsx, { ClassValue } from 'clsx';
import {
  AllHTMLAttributes,
  createElement,
  ElementType,
  forwardRef,
} from 'react';
import { AtomicProps, generateAtomicClasses } from '../utilities/atoms';
import { sprinkles } from '../utilities/atomic.css';
export interface BoxProps
  extends Omit<AtomicProps, 'reset'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'className'> {
  component?: ElementType;
  className?: ClassValue;
}
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', className, ...props }, ref) => {
    const atomicProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};
    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<AtomicProps, 'reset'>)) {
        atomicProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }
    const userClasses = clsx(className);
    const atomicClasses = generateAtomicClasses({
      reset: typeof component === 'string' ? component : 'div',
      ...atomicProps,
    });

    const element = createElement(component, {
      className: `${atomicClasses}${userClasses ? ` ${userClasses}` : ''}`,
      ...nativeProps,
      ref,
    });

    return element;
  },
);

Box.displayName = 'Box';
