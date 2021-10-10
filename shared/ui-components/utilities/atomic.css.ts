import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
};

const responsiveAtomicProperties = defineProperties({
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
    display: {
      none: 'none',
      block: 'block',
      inline: 'inline',
      inlineBlock: 'inline-block',
      flex: 'flex',
    },
    // flex container properties
    flexDirection: {
      row: 'row',
      rowReverse: 'row-reverse',
      column: 'column',
      columnReverse: 'column-reverse',
    },
    flexWrap: { nowrap: 'nowrap', wrap: 'wrap', wrapReverse: 'wrap-reverse' },
    justifyContent: {
      flexStart: 'flex-start',
      flexEnd: 'flex-end',
      center: 'center',
      spaceBetween: 'space-between',
      spaceAround: 'space-around',
      spaceEvenly: 'space-evenly',
    },
    alignItems: {
      flexStart: 'flex-start',
      center: 'center',
      flexEnd: 'flex-end',
    },
    // flex item properties
    flexGrow: [0, 1],
    flexShrink: [0],
    alignSelf: {
      auto: 'auto',
      flexStart: 'flex-start',
      flexEnd: 'flex-end',
      center: 'center',
    },
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginRight: space,
    marginLeft: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    flexFlow: ['flexDirection', 'flexWrap'],
  },
});

export const sprinkles = createSprinkles(responsiveAtomicProperties);
