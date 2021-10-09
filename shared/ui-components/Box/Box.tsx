import clsx, { ClassValue } from 'clsx';
import {
  AllHTMLAttributes,
  createElement,
  ElementType,
  forwardRef,
} from 'react';

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'className'> {
  component?: ElementType;
  className?: ClassValue;
}
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', className, ...props }, ref) => {
    const element = createElement(component, {
      className: `${className ? ` ${clsx(className)}` : ''}`,
      ...props,
      ref,
    });

    return element;
  },
);
