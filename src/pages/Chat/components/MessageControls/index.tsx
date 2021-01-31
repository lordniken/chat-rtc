import React, { useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/Button';
import TextField from 'components/TextField';
import { Form, Formik, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SendMessage } from 'store/chat/actions';
import SendIcon from './icons/send.svg';
import AttachImgIcon from './icons/attach_img.svg';
import { StyledWrapper, ControlWrapper, StyledFile } from './styles';

const INITIAL_VALUES = {
  message: '',
};

const MessageControls: React.FC = () => {
  const attachRef = useRef<HTMLInputElement>( null );
  const translation = useTranslation(['pages/chat']);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];

  const attachTrigger = useCallback(() => {
    attachRef!.current!.click();
  }, [attachRef]);

  const onLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const sendMessageHandler = ({ message }: typeof INITIAL_VALUES, formik: FormikHelpers<typeof INITIAL_VALUES>) => {
    dispatch(SendMessage({ message, to: userId }));
    formik.resetForm();
  };

  return (
    <StyledWrapper>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={sendMessageHandler}
      >
        <Form>
          <ControlWrapper>
            <Button type="button" onClick={attachTrigger} icon={AttachImgIcon} transparent title={translation.t('attach')} />
            <StyledFile ref={attachRef} onChange={onLoadFile} />
            <TextField name="message" placeholder={translation.t('sendPlaceholder')} fullWidth />
            <Button type="submit" icon={SendIcon} transparent title={translation.t('send')} />
          </ControlWrapper>
        </Form>
      </Formik>
    </StyledWrapper>
  );
};

export default MessageControls;