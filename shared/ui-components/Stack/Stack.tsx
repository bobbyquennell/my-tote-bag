import React, { Children, ReactNode } from 'react';
import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../utilities/atomic.css';
import { negativeMarginTop } from '../utilities/negativeMarginTop';
import flattenChildren from 'react-keyed-flatten-children';
export interface StackProps {
  children: ReactNode;
  space: ResponsiveSpace;
}
export const Stack = ({ children, space = 'none' }: StackProps) => {
  const stackItems = flattenChildren(children);
  return (
    <Box display="block" className={negativeMarginTop(space)}>
      {Children.map(stackItems, (child) => {
        return <Box paddingTop={space}>{child}</Box>;
      })}
    </Box>
  );
};

export default Stack;
