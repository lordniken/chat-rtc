import styled from 'styled-components';

export const StyledFakeCheckBox = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  transition: border-color 0.3s ease-out;
`;

export const StyledCheckBoxWrapper = styled.label`
  display: inline-block;
  height: 24px;
  position: relative;
  user-select: none;
  cursor: pointer;

  &:hover {
    ${StyledFakeCheckBox} {
      border-color: ${({ theme }) => theme.colors.inputBorder};
      
      &:before, &:after {
        background-color: ${({ theme }) => theme.colors.accentBlue90};
      }
    }
  }
`;

export const StyledCheckBoxText = styled.span`
  padding-left: 30px;
  vertical-align: middle;
`;

export const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked {
    ~ ${StyledFakeCheckBox} {
      
      &:before, &:after{
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.colors.accentBlue};
        border-radius: 2px;
        transform: rotate(45deg);
        transition: background-color 0.3s ease-out;
      }
      
      &:before {
        width: 8px;
        height: 3px;
        left: 4px;
        bottom: 8px;
      }
    
      &:after {
        width: 3px;
        height: 12px;
        left: 12px;
        bottom: 5px;
      }
    }
  }

  &:disabled {
    ~ ${StyledFakeCheckBox} {     
      background-color: ${({ theme }) => theme.colors.inputBorder};
    }    
  }
`;