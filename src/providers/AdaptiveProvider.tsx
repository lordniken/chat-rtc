/* eslint-disable  */

import React, { FC, createContext, useState, useEffect, useCallback } from 'react';

export enum EBreakpoints {
  xxs = 0,
  xs = 460,
  sm = 768,
  md = 1024,
  lg = 1200,
  xl = 1400,
  xxl = 1600,
  xxxl = 1900,
}

export enum EDevices {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
  xxxl = 'xxxl',
}

export interface IAdaptiveContext {
  breakpoint: EDevices;
  below: (breakpoint: EDevices) => boolean;
  above: (breakpoint: EDevices) => boolean;
  between: (fromBreakpoint: EDevices, toBreakpoint: EDevices) => boolean;
  only: (breakpoint: EDevices) => boolean;
}

const getCurrentBreakpoint = (): EDevices => {
  let prevDevice: EDevices = EDevices.xxs;

  for (const device in EBreakpoints) {
    if (typeof EBreakpoints[device] === 'string') continue;

    if (window.innerWidth < +EBreakpoints[device]) return prevDevice;

    prevDevice = device as EDevices;
  }

  return prevDevice;
};

const below = (point: EDevices): boolean => window.innerWidth < EBreakpoints[point];

const above = (point: EDevices): boolean => window.innerWidth >= EBreakpoints[point];

const between = (fromBreakpoint: EDevices, toBreakpoint: EDevices): boolean =>
  EBreakpoints[fromBreakpoint] > EBreakpoints[toBreakpoint]
    ? window.innerWidth < EBreakpoints[fromBreakpoint] &&
      window.innerWidth >= EBreakpoints[toBreakpoint]
    : window.innerWidth < EBreakpoints[toBreakpoint] &&
      window.innerWidth >= EBreakpoints[fromBreakpoint];

export const AdaptiveContext = createContext<IAdaptiveContext>({
  breakpoint: getCurrentBreakpoint(),
  below,
  above,
  between,
  only: () => false,
});

export const AdaptiveConsumer = AdaptiveContext.Consumer;

const AdaptiveProvider: FC = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<EDevices>(getCurrentBreakpoint());

  const only = useCallback((point: EDevices): boolean => breakpoint === point, [breakpoint]);

  const resizeListener = useCallback(() => setBreakpoint(getCurrentBreakpoint()), []);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, [resizeListener]);

  return (
    <AdaptiveContext.Provider
      value={{
        breakpoint,
        below,
        above,
        between,
        only,
      }}
    >
      {children}
    </AdaptiveContext.Provider>
  );
};

export default AdaptiveProvider;

/* eslint-enable  */