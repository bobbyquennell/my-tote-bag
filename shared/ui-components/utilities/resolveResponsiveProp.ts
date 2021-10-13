import clsx from 'clsx';
import {
  OptionalResponsiveValue,
  normalizeResponsiveValue,
} from './atomic.css';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
export const resolveResponsiveProp = <Keys extends string | number>(
  value: OptionalResponsiveValue<Keys>,
  xsAtoms: Record<Keys, string>,
  smAtoms: Record<Keys, string>,
  mdAtoms: Record<Keys, string>,
  lgAtoms: Record<Keys, string>,
  xlAtoms: Record<Keys, string>,
) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return xsAtoms[value!];
  }

  const normalized = normalizeResponsiveValue(value);
  const [xs, sm, md, lg, xl] = optimizeResponsiveArray([
    normalized.xs ?? null,
    normalized.sm ?? null,
    normalized.md ?? null,
    normalized.lg ?? null,
    normalized.xl ?? null,
  ]);

  const xsAtom = xsAtoms[xs!];
  const smAtom = smAtoms[sm!];
  const mdAtom = mdAtoms[md!];
  const lgAtom = lgAtoms[lg!];
  const xlAtom = xlAtoms[xl!];

  return clsx(xsAtom, smAtom, mdAtom, lgAtom, xlAtom);
};
