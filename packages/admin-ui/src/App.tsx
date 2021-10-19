/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import greeter from 'greeter';
import styled from '@emotion/styled';
import { createStyleObject } from '@capsizecss/core';
import { Box, Flex, Stack, Text, Heading } from '@shared/ui-components';
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

      <Stack space="large">
        <Stack space="medium">
          <Heading>Hello World h1</Heading>
          <Heading level="2">Hello World h2</Heading>
          <Heading level="3">Hello World h3</Heading>
          <Heading level="4">Hello World h4</Heading>
          <Heading level="5">Hello World h5</Heading>
          <Heading level="6">Hello World h6</Heading>
        </Stack>
        <Stack space="medium">
          <Text size="xsmall">Text xsmall</Text>
          <Text size="small">Text small</Text>
          <Text size="regular">Text regular</Text>
          <Text size="large">Text large</Text>
        </Stack>
      </Stack>
      <Stack space="medium">
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
          borderRadius="none"
        >
          <Text weight="regular" size="small" align="center">
            Border Radius: none
          </Text>
        </Box>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
          borderRadius="small"
        >
          <Text weight="regular" size="small" align="center">
            Border Radius: small
          </Text>
        </Box>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
          borderRadius="regular"
        >
          <Text weight="regular" size="small" align="center">
            Border Radius: regular
          </Text>
        </Box>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
          borderRadius="medium"
        >
          <Text weight="regular" size="small" align="center">
            Border Radius: medium
          </Text>
        </Box>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
          borderRadius="large"
        >
          <Text weight="regular" size="small" align="center">
            Border Radius: large
          </Text>
        </Box>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
          borderRadius="full"
        >
          <Text weight="regular" size="small" align="center">
            Border Radius: full
          </Text>
        </Box>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'large'}
          margin={'large'}
          flexGrow={0}
          borderRadius={['none', 'regular', 'medium', 'large', 'full']}
        >
          <Text weight="regular" size="small" align="center">
            Border Radius: responsive
          </Text>
        </Box>
      </Stack>
      <Flex justifyContent={'center'}>
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '50%',
            background: 'lightblue',
          }}
          padding={'small'}
          margin={'large'}
          flexGrow={1}
        >
          <Text weight="regular" size="small" align="center">
            Flex Item 50%
          </Text>
        </Box>
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
          <Text weight="strong" size="xsmall" align="center">
            Flex Item 50%
          </Text>
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
              padding={'large'}
              margin={{ xs: 'none' }}
            >
              <span>Flex Item 20% {item}</span>
            </Box>
          );
        })}
        <Box
          style={{
            border: 'solid 2px yellow',
            flexBasis: '40%',
            background: 'pink',
          }}
          padding={'large'}
          margin={{ xs: 'none' }}
        >
          <Text align="left" size="xsmall">
            Flex Item 40%
          </Text>
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
              <span>stack item {item}</span>
            </Box>
          );
        })}
      </Stack>
    </div>
  );
}

export default App;
