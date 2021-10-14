/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import greeter from 'greeter';
import styled from '@emotion/styled';
import { createStyleObject } from '@capsizecss/core';
import { Box, Flex, Stack } from '@shared/ui-components';
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
      <Flex justifyContent={'center'}>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
        >
          Flex Item 50%
        </Box>
      </Flex>
      <Flex
        padding={['small', 'small', 'medium', 'large']}
        style={{
          border: 'solid 2px red',
          background: 'orange',
        }}
        flexWrap="wrap"
      >
        {[1, 2, 3].map((item) => {
          return (
            <Box
              key={item}
              style={{
                border: 'solid 2px yellow',
                flexBasis: '20%',
                background: 'lightblue',
              }}
              padding={{ xs: 'small', sm: 'medium' }}
              margin={{ xs: 'none' }}
            >
              Flex Item 20% {item}
            </Box>
          );
        })}
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '40%',
            background: 'pink',
          }}
          padding={{ xs: 'small', sm: 'medium' }}
          margin={{ xs: 'none' }}
        >
          Flex Item 40%
        </Box>
      </Flex>
      <Stack space={['small', 'medium', 'large']}>
        {[1, 2, 3].map((item) => {
          return (
            <Box
              key={item}
              style={{ background: 'lightblue' }}
              textAlign="center"
              padding={['small', 'medium', 'large']}
            >
              stack item {item}
            </Box>
          );
        })}
      </Stack>
    </div>
  );
}

export default App;
