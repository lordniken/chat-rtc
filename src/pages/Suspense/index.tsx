import React from 'react';
import Spinner from 'components/Spinner';
import { StyledWrapper } from './styles';

const Suspense: React.FC = () => {
  return (
    <StyledWrapper>
      <Spinner />
    </StyledWrapper>
  );
};

export default Suspense;