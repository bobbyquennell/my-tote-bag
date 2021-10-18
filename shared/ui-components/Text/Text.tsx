import React, { ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { useTextStyle, UseTextStyleProps } from '../utilities/typography';

export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  size?: UseTextStyleProps['size'];
  weight?: UseTextStyleProps['weight'];
  align?: BoxProps['textAlign'];
  children?: ReactNode;
}

export const Text = ({
  id,
  component = 'span',
  size = 'regular',
  weight = 'regular',
  align = 'center',
  children,
}: TextProps) => {
  const textStyles = useTextStyle({ weight, size });

  return (
    <Box
      id={id}
      display="block"
      component={component}
      textAlign={align}
      className={textStyles}
    >
      {children}
    </Box>
  );
};
