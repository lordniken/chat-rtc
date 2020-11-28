import styled from 'styled-components';

export const StyledFakeCheckBox = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  transition: border-color 0.3s ease-out;
`;

export const StyledCheckBoxWrapper = styled.label`
  display: inline-block;
  height: 20px;
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
        left: 2px;
        bottom: 6px;
      }
    
      &:after {
        width: 3px;
        height: 11px;
        left: 10px;
        bottom: 4px;
      }
    }
  }

  &:disabled {
    ~ ${StyledCheckBoxText}, ~ ${StyledFakeCheckBox} {
      cursor: default;
    }
    
    ~ ${StyledFakeCheckBox} {     
      background-color: ${({ theme }) => theme.colors.inputBorder};
    }    
  }
`;