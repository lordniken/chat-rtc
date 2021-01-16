import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

export enum ComponentTypes {
  p = 'p',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  subtitle = 'h6',
  span = 'span',
  small = 'small',
  strong = 'strong',
  message = 'span'
}

interface ITypography {
  p: ComponentTypes.p;
  h1: ComponentTypes.h1;
  h2: ComponentTypes.h2;
  h3: ComponentTypes.h3;
  h4: ComponentTypes.h4;
  h5: ComponentTypes.h5;
  span: ComponentTypes.span;
  small: ComponentTypes.small;
  strong: ComponentTypes.small;
  message: ComponentTypes.span;
}

interface ITypograhyProps {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  paddingRight?: boolean;
  gutter?: boolean;
}

interface IProps {
  component?: keyof ITypography;
  className?: string;
}

const TypographyComponent: React.FC<IProps> = ({ component = 'span', children, className, ...rest }) => {
  const Component = useMemo(() => ComponentTypes[component], [component]);

  return <Component className={className}>{children}</Component>;
};

const Typography = styled(TypographyComponent)<ITypograhyProps>`
  margin: 0;
  text-align: ${({ align = 'left' }) => align};
  ${({ gutter }) => gutter && css`margin-bottom: 0.5em;`};
  ${({ paddingRight }) => paddingRight && css`padding-right: 0.25em;`};

  ${({
    component
  }) => {
    switch (component) {
      case 'h1': return css`
        font-size: 30px;
        line-height: 1.3em;
      `;
      case 'h2': return css`
        font-size: 26px;
        line-height: 1.3em;
      `;
      case 'h3': return css`
        font-size: 22px;
        line-height: 1.3em;
      `;
      case 'strong': return css`
        font-weight: 600;
        font-size: 13px;
        line-height: 22px;
      `;
      case 'p': return css`
        font-size: 18px;
      `;
      case 'message': return css`
        font-size: 14px;
      `;      
      case 'small': return css`
        font-size: 12px;
        font-style: normal;
      `;
      default: return css``;
    }
  }}
`;

export default Typography;