import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from './responsiveStyle';
import { space } from './atomic.css';

const negativeMarginTop = (spaceValue: string | number) => ({
  ':before': {
    marginBottom: spaceValue ? calc.negate(spaceValue) : 0,
  },
});

export const base = style({
  ':before': { content: '""', display: 'table' },
});

export const xs = styleVariants({ none: 0, ...space }, (value) =>
  negativeMarginTop(value),
);

export const sm = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    sm: negativeMarginTop(value),
  }),
);

export const md = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    md: negativeMarginTop(value),
  }),
);

export const lg = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    lg: negativeMarginTop(value),
  }),
);

export const xl = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    xl: negativeMarginTop(value),
  }),
);
