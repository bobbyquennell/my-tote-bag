import clsx, { ClassValue } from 'clsx';
import {
  AllHTMLAttributes,
  createElement,
  ElementType,
  forwardRef,
} from 'react';
import { Atoms, atoms } from '../utilities/atoms';
import { sprinkles } from '../utilities/sprinkles.css';
export interface BoxProps
  extends Atoms,
    Omit<AllHTMLAttributes<HTMLElement>, 'className'> {
  component?: ElementType;
  className?: ClassValue;
}
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', className, ...props }, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};
    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Atoms)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = atoms(atomProps);

    const element = createElement(component, {
      className: `${atomicClasses}${className ? ` ${clsx(className)}` : ''}`,
      ...nativeProps,
      ref,
    });

    return element;
  },
);
