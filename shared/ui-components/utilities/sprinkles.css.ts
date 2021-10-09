import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
};

const responsiveProperties = defineProperties({
  conditions: {
    xs: {}, //mobile
    sm: { '@media': `screen and (min-width: 600px)` }, // tablet
    md: { '@media': 'screen and (min-width: 900px)' }, // tablet+
    lg: { '@media': 'screen and (min-width: 1200px)' }, // laptop & desktop
    xl: { '@media': 'screen and (min-width: 1536px)' }, // wide
  },
  defaultCondition: 'xs',
  responsiveArray: ['xs', 'sm', 'md', 'lg', 'xl'],
  properties: {
    display: ['none', 'block', 'flex'],
    flexDirection: ['row', 'column'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
