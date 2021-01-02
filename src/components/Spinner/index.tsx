import styled from 'styled-components';

interface IProps {
  size: number;
}

const Spinner = styled.div<IProps>`
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: 0.2em solid ${({ theme }) => theme.colors.accentBlue50};
  border-left: 0.2em solid ${({ theme }) => theme.colors.accentBlue};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: ${({ size = 3 }) => `${size}em;`};
  height: ${({ size = 3 }) => `${size}em;`};

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;