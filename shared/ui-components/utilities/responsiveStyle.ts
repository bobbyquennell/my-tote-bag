import omit from 'lodash/omit';
import mapValues from 'lodash/mapValues';
import { StyleRule } from '@vanilla-extract/css';
import { breakpoints } from './brekpoints';

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;

export const breakpointQuery = mapValues(
  omit(breakpoints, 'xs'),
  (bp) => `screen and (min-width: ${bp}px)`,
);
const makeMediaQuery =
  (breakpoint: keyof typeof breakpointQuery) => (styles?: CSSProps) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : {
          [breakpointQuery[breakpoint]]: styles,
        };

const mediaQuery = {
  sm: makeMediaQuery('sm'),
  md: makeMediaQuery('md'),
  lg: makeMediaQuery('lg'),
  xl: makeMediaQuery('xl'),
};

interface ResponsiveStyle {
  xs?: CSSProps;
  sm?: CSSProps;
  md?: CSSProps;
  lg?: CSSProps;
  xl?: CSSProps;
}

export const responsiveStyle = ({
  xs,
  sm,
  md,
  lg,
  xl,
}: ResponsiveStyle): StyleRule => ({
  ...omit(xs, '@media'),
  ...(sm || md || lg || xl
    ? {
        '@media': {
          ...mediaQuery.sm(sm ?? {}),
          ...mediaQuery.md(md ?? {}),
          ...mediaQuery.lg(lg ?? {}),
          ...mediaQuery.xl(xl ?? {}),
        },
      }
    : {}),
});
