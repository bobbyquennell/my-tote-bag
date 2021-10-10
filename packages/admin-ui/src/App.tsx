/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import greeter from 'greeter';
import styled from '@emotion/styled';
import { createStyleObject } from '@capsizecss/core';
import { vanillaStyle } from 'vanillaExtract.css';
import { Box, Flex } from '@shared/ui-components';
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
      <Flex
        padding={['small', 'small', 'medium', 'large']}
        style={{
          border: 'solid 1px red',
          background: 'orange',
        }}
      >
        <Box
          style={{
            border: 'solid 1px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={{ xs: 'small', sm: 'medium' }}
          margin={{ xs: 'small' }}
        >
          Hello World
        </Box>
        <Box
          style={{
            border: 'solid 1px yellow',
            flexBasis: '50%',
            background: 'pink',
          }}
          padding={{ xs: 'small', sm: 'medium' }}
          margin={{ xs: 'small' }}
        >
          Hello World2
        </Box>
      </Flex>
      <Box
        style={{ background: 'lightBlue' }}
        paddingLeft="large"
        margin={'large'}
      >
        <Box style={{ background: 'Blue' }} padding="large">
          <Box textAlign={['center', 'left', 'right']}>paddingLeft</Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
