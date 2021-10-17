import * as styles from './typography.css';
import clsx from 'clsx';

export interface UseTextStyleProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.text;
}

export function useTextStyle({
  weight = 'regular',
  size = 'standard',
}: UseTextStyleProps) {
  return clsx(styles.fontFamily, styles.fontWeight[weight], styles.text[size]);
}
