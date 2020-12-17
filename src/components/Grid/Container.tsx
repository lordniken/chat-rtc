/* eslint-disable  */
import styled, { css } from 'styled-components';
import settings, { TBreakpoints } from './settings';

interface IContainer {
  gap?: typeof settings.gap;
}

const Container = styled.div<IContainer>(({ gap }: IContainer) => {
  const g = gap ?? settings.gap;

  let result = `
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  `;

  if (typeof g === 'number') {
    result += `
      padding-left: ${g}px;
      padding-right: ${g}px;
    `;
  }

  if (typeof settings.container === 'number') {
    result += `
      max-width: ${settings.container}px;
    `;
  } else if (typeof settings.container === 'object') {
    for (const device in settings.breakpoints) {
      const breakpoint = settings.breakpoints[device as keyof TBreakpoints] || null;
      const container = settings.container[device as keyof TBreakpoints] || null;

      if (breakpoint === null) continue;

      if (container !== null) {
        result +=
          breakpoint > 0
            ? `@media (min-width: ${breakpoint}px) {
              max-width: ${container}px;
            }`
            : `max-width: ${container}px;`;
      }

      if (typeof g !== 'object') continue;

      const gapLocal = g[device as keyof TBreakpoints];

      result +=
        breakpoint > 0
          ? `@media (min-width: ${breakpoint}px) {
            padding-left: ${gapLocal}px;
            padding-right: ${gapLocal}px;
          }`
          : `
            padding-left: ${gapLocal}px;
            padding-right: ${gapLocal}px;
          `;
    }
  }

  return css`
    ${result}
  `;
});

export default Container;

/* eslint-enable  */