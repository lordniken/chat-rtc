/* eslint-disable  */
import styled, { css } from 'styled-components';

import settings, { TBreakpoints } from './settings';

interface ICol extends TBreakpoints {
  gap?: typeof settings.gap;
  align?: 'flex-start' | 'center' | 'baseline' | 'flex-end' | 'stretch';
  offset?: number | TBreakpoints;
  auto?: boolean;
  grow?: number | 'initial';
}

const Col = styled.div<ICol>(({ gap, align = 'flex-start', offset = 0, grow = 'initial', auto = false ,...props }: ICol) => {
  const g = gap ?? settings.gap;

  let result = `
        width: ${auto ? 'auto' : '100%'};
        box-sizing: border-box;
        align-self: ${align};
        flex-grow: ${grow};
    `;

  if (typeof g === 'number') {
    result += `
            padding-left: ${g}px;
            padding-right: ${g}px;
        `;
  }

  if (!auto) {
    for (const device in settings.breakpoints) {
      const breakpoint = (settings.breakpoints as {
        [key: string]: number;
      })[device];
      const span = +(props as { [key: string]: any })[device];
  
      if (!Number.isNaN(span)) {
        let w = `width: calc(100% * ${span} / ${settings.columns});`;
  
        if (typeof g === 'object') {
          w += `
                      padding-left: ${g[device as keyof TBreakpoints]}px;
                      padding-right: ${g[device as keyof TBreakpoints]}px;
                  `;
        }
  
        if (typeof offset === 'number' && offset > 0) {
          w += `margin-left: calc(100% * ${offset} / ${settings.columns});`;
        } else if (typeof offset === 'object') {
          w += `margin-left: calc(100% * ${offset[device as keyof TBreakpoints]} / ${
            settings.columns
          });`;
        }
  
        if (breakpoint > 0) {
          result += `@media (min-width: ${breakpoint}px) {${w}}`;
        } else {
          result += w;
        }
      }
    }
  }

  return css`
    ${result}
  `;
});

export default Col;

/* eslint-enable */