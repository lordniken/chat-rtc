import React from 'react';
import { Button } from 'components/Button';
import TextField from 'components/TextField';
import { Formik } from 'formik';
import SendIcon from './icons/send.svg';
import { StyledWrapper, ControlWrapper } from './styles';

const MessageControls: React.FC = () => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{}}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <ControlWrapper>
              <TextField name="message" placeholder="Текст сообщения" fullWidth />
              <Button type="submit" icon={SendIcon} transparent title="Отправить сообщение" />
            </ControlWrapper>
          </form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default MessageControls;