import clsx from 'clsx';
import { RequiredResponsiveValue, Space } from './atomic.css';
import { resolveResponsiveProp } from './resolveResponsiveProp';
import * as styles from './negativeMarginTop.css';

export const negativeMarginTop = (space: RequiredResponsiveValue<Space>) =>
  clsx(
    styles.base,
    resolveResponsiveProp(
      space,
      styles.xs,
      styles.sm,
      styles.md,
      styles.lg,
      styles.xl,
    ),
  );
