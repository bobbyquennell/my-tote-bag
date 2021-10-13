export const breakpointNames = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;
