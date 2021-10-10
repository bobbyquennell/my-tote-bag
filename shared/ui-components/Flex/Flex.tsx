import React, { ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
export interface FlexProps extends Omit<BoxProps, 'component' | 'display'> {
  children: ReactNode;
}
export const Flex = ({ children, ...rest }: FlexProps) => {
  return (
    <Box component="div" display={'flex'} {...rest}>
      {children}
    </Box>
  );
};

export default Flex;
