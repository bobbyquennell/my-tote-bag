import * as styles from './typography.css';
import clsx from 'clsx';

export interface UseTextStyleProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.text;
}

export function useTextStyle({
  weight = 'regular',
  size = 'regular',
}: UseTextStyleProps) {
  return clsx(styles.fontFamily, styles.fontWeight[weight], styles.text[size]);
}
export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
export type HeadingWeight = 'regular' | 'weak';
export interface UseHeadingStyleProps {
  weight?: HeadingWeight;
  level: HeadingLevel;
}
export function useHeadingStyle({
  weight = 'regular',
  level = '1',
}: UseHeadingStyleProps) {
  return clsx(
    styles.fontFamily,
    styles.headingWeight[weight],
    styles.heading[level],
  );
}
