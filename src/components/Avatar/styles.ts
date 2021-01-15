import styled, { css } from 'styled-components';

interface IProps {
  active?: boolean;
}

export const StyledAvatarWrapper = styled.label<IProps>`
  margin: 5px;
  cursor: pointer;

  & div {
    opacity: 0.3;
    transition: opacity 0.2s ease-out;

    &:hover{
      opacity: 0.7;
    }
  }

  & input[type="radio"] {
    position: absolute;
    width: 0;

    :checked + div{
      opacity: 1;
    } 
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;