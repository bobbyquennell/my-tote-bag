import { style, styleVariants } from '@vanilla-extract/css';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { FontMetrics } from '@capsizecss/core';

import { breakpointQuery } from './responsiveStyle';
import { Breakpoint } from './breakpoints';

export type TextBreakpoint = Exclude<Breakpoint, 'xs' | 'lg' | 'xl'>;

type FontSizeText = {
  fontSize: number;
  leading: number;
};
type TextDefinition = {
  fontSize: number;
  leading: number;
  fontMetrics: FontMetrics;
};
export type TextDefinitionResponsive = Record<TextBreakpoint, TextDefinition>;

export const fontFamily = style({
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
});

// const fontWeights = {
//   regular: 400,
//   medium: 500,
//   strong: 700,
// } as const;

const fontMetrics = {
  capHeight: 700,
  ascent: 1058,
  descent: -291,
  lineGap: 0,
  unitsPerEm: 1000,
};

/* Capsize supports two methods of defining the size of text, capHeight and fontSize.

NOTE: You should only ever pass one or the other, not both. */

export const fontWeight = styleVariants({
  regular: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  strong: { fontWeight: 700 },
});

const xsTextDefinitionsResponsive: TextDefinitionResponsive = {
  sm: { fontSize: 18, leading: 24, fontMetrics },
  md: { fontSize: 16, leading: 22, fontMetrics },
};
const makeTypographyRules = (
  textDefinition: TextDefinitionResponsive,
  debug?: string,
) => {
  return createTextStyle(
    textDefinition.sm,
    {
      '@media': {
        [breakpointQuery.md]: textDefinition.md,
      },
    },
    debug,
  );
};

export const text = {
  standard: makeTypographyRules(xsTextDefinitionsResponsive, 'standard'),
};
