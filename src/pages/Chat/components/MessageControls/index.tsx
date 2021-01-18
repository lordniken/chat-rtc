import React, { useCallback, useRef } from 'react';
import { Button } from 'components/Button';
import TextField from 'components/TextField';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import SendIcon from './icons/send.svg';
import AttachImgIcon from './icons/attach_img.svg';
import { StyledWrapper, ControlWrapper, StyledFile } from './styles';

const MessageControls: React.FC = () => {
  const attachRef = useRef<HTMLInputElement>( null );
  const translation = useTranslation(['pages/chat']);

  const attachTrigger = useCallback(() => {
    attachRef!.current!.click();
  }, [attachRef]);

  const onLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

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
              <Button type="button" onClick={attachTrigger} icon={AttachImgIcon} transparent title={translation.t('attach')} />
              <StyledFile ref={attachRef} onChange={onLoadFile} />
              <TextField name="message" placeholder={translation.t('sendPlaceholder')} fullWidth />
              <Button type="submit" icon={SendIcon} transparent title={translation.t('send')} />
            </ControlWrapper>
          </form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default MessageControls;