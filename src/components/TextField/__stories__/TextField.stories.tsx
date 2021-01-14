import React from 'react';
import { Formik } from 'formik';
import Icon from 'pages/Chat/components/MessageControls/icons/send.svg';
import styled from 'styled-components';
import TextField from '..';

export default {
  title: 'components/TextField',
  component: TextField,
  argTypes: {},
};

const StyledTextField = styled(TextField)`
  margin: 5px 0;
`;

export const Component = ({ ...props }) => (
  <Formik
    initialValues={{}}
    onSubmit={() => {}}
  >
    {() => (
      <form>
        <StyledTextField name="test" {...props} />
        <StyledTextField name="test2" {...props} icon={Icon} />
      </form>
    )}
  </Formik>
);