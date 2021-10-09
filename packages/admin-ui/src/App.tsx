/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import greeter from 'greeter';
import styled from '@emotion/styled';
import { createStyleObject } from '@capsizecss/core';
import { vanillaStyle } from 'vanillaExtract.css';
import { Box } from '@shared/ui-components';
interface AppProps extends React.ComponentProps<'div'> {
  userName: string;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  color: blue;
  background-color: lightcoral;
  height: 5rem;
  width: 10rem;
`;

const fontMetrics = {
  capHeight: 1456,
  ascent: 1900,
  descent: -500,
  lineGap: 0,
  unitsPerEm: 2048,
};

const capsizeStyles = createStyleObject({
  fontMetrics,
  capHeight: 48,
  lineGap: 24,
});

function App({ userName, children, ...rest }: AppProps) {
  return (
    <div {...rest}>
      <StyledButton>hello, I am from emotion</StyledButton>
      {greeter(userName)}
      {children}
      <Box
        display={{ xs: 'none', sm: 'block', xl: 'flex' }}
        padding={['none', 'small', 'medium', 'large']}
      >
        <Box style={{ border: 'solid 1px yellow', flexBasis: '50%' }}>
          Hello World
        </Box>
        <Box style={{ border: 'solid 1px yellow', flexBasis: '50%' }}>
          Hello World2
        </Box>
      </Box>
    </div>
  );
}

export default App;
