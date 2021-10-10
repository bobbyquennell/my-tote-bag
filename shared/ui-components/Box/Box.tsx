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
  extends AtomicProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'className'> {
  component?: ElementType;
  className?: ClassValue;
}
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', className, ...props }, ref) => {
    const atomicProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};
    for (const key in props) {
      if (sprinkles.properties.has(key as keyof AtomicProps)) {
        atomicProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = generateAtomicClasses(atomicProps);

    const element = createElement(component, {
      className: `${atomicClasses}${className ? ` ${clsx(className)}` : ''}`,
      ...nativeProps,
      ref,
    });

    return element;
  },
);

Box.displayName = 'Box';
