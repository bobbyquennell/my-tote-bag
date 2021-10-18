import React, { ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { useHeadingStyle, UseHeadingStyleProps } from '../utilities/typography';

export interface HeadingProps extends Pick<BoxProps, 'component'> {
  id?: string;
  level?: UseHeadingStyleProps['level'];
  weight?: UseHeadingStyleProps['weight'];
  align?: BoxProps['textAlign'];
  children?: ReactNode;
}

export const Heading = ({
  id,
  level = '1',
  weight = 'regular',
  align = 'center',
  children,
}: HeadingProps) => {
  const headingStyles = useHeadingStyle({ weight, level });

  return (
    <Box
      id={id}
      display="block"
      component={`h${level}`}
      textAlign={align}
      className={headingStyles}
    >
      {children}
    </Box>
  );
};
