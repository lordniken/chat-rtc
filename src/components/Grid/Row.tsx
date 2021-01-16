/* eslint-disable  */
import React from 'react';
import styled, { css } from 'styled-components';

import settings, { TBreakpoints } from './settings';

export type TFlexVariants = 'flex-start' | 'center' | 'baseline' | 'flex-end' | 'stretch' | 'space-between';

interface IRow {
  gap?: typeof settings.gap;
  align?: TFlexVariants;
  justify?: TFlexVariants;
  alignContent?: TFlexVariants;
  wrap?: boolean;
}

const Row = styled(({ wrap, ...props }) => (
  <div
    data-name="row"
    wrap={`${wrap}`}
    {...props}
  />
))<IRow>(({
  gap,
  align = 'flex-start',
  justify = 'flex-start',
  alignContent = 'flex-start',
  wrap = true,
}: IRow) => {
  const g = gap ?? settings.gap;

  let result = `
      box-sizing: border-box;
      display: flex;
      flex-flow: row ${wrap ? 'wrap' : 'nowrap'};
      align-items: ${align};
      justify-content: ${justify};
      align-content: ${alignContent};
  `;

  if (typeof g === 'number') {
    result += `
          margin-left: -${g}px;
          margin-right: -${g}px;
          width: calc(100% + ${g * 2}px);
      `;
  } else {
    for (const device in g) {
      const value: number = g[device as keyof TBreakpoints] ?? 0;
      const breakpoint: number = settings.breakpoints[device as keyof TBreakpoints] ?? 0;

      if (breakpoint > 0) {
        result += `@media (min-width: ${breakpoint}px) {
          margin-left: -${value}px;
          margin-right: -${value}px;
          width: calc(100% + ${value * 2}px);
        }`;
      } else {
        result += `
          margin-left: -${value}px;
          margin-right: -${value}px;
          width: calc(100% + ${value * 2}px);
        `;
      }
    }
  }

  return css`
    ${result}
  `;
});

export default Row;

/* eslint-enable  */