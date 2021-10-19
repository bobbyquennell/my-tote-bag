import {
  defineProperties,
  createSprinkles,
  ConditionalValue,
  createNormalizeValueFn,
  RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';

export const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
};
export type Space = keyof typeof space | 'none';
export type ResponsiveSpace = RequiredResponsiveValue<Space>;

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
    borderRadius: {
      none: '0px',
      small: '4px',
      regular: '6px',
      medium: '8px',
      large: '12px',
      full: '9999px',
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
    textAlign: ['center', 'left', 'right'],
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

export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveAtomicProperties, Value>;
export type OptionalResponsiveValue<Value extends string | number> =
  ConditionalValue<typeof responsiveAtomicProperties, Value>;
export const normalizeResponsiveValue = createNormalizeValueFn(
  responsiveAtomicProperties,
);

export const sprinkles = createSprinkles(responsiveAtomicProperties);
