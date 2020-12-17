import { EBreakpoints, EDevices } from 'providers/AdaptiveProvider';

const breakpoints = Object.keys(EBreakpoints).reduce(
  (result, key): object =>
    Number.isNaN(+key)
      ? {
        ...result,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key]: +EBreakpoints[key as any],
      }
      : result,
  {},
);

export type TBreakpoints = {
  [key in keyof typeof EDevices]?: number;
};

type TSettings = {
  container: number | TBreakpoints;
  gap: number | TBreakpoints;
  breakpoints: TBreakpoints;
  columns: number;
};

const settings: TSettings = {
  container: {
    md: 1120,
  },
  gap: 12,
  breakpoints,
  columns: 12,
};

export default settings;
