/* eslint-disable jsx-a11y/media-has-caption */
import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/Button';
import TextField from 'components/TextField';
import { Form, Formik, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SendVoice, SendImage, SendMessage } from 'store/chat/actions';
import { getIsWsUp } from 'store/app/selectors';
import useNotifications from 'hooks/useNotifications';
import SendIcon from './icons/send.svg';
import AttachImgIcon from './icons/attach_img.svg';
import { StyledWrapper, ControlWrapper, StyledFile } from './styles';
import { messageValidation } from './validation';

const INITIAL_VALUES = {
  message: '',
};

const MessageControls: React.FC = () => {
  const attachRef = useRef<HTMLInputElement>( null );
  const translation = useTranslation(['pages/chat']);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const isWsUp = useSelector(getIsWsUp);
  const [isRecording, setRecording] = useState(false);
  const StreamRef = useRef<null | MediaStream>(null);
  const RecorderRef = useRef<null | MediaRecorder>(null);
  const ChunksRef = useRef<Blob[]>([]);
  const { createNotification } = useNotifications();

  const attachTrigger = useCallback(() => {
    attachRef!.current!.click();
  }, [attachRef]);

  const onLoadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target?.files![0])
      dispatch(SendImage({ media: e.target.files[0], to: userId }));      
  };

  const sendMessageHandler = ({ message }: typeof INITIAL_VALUES, formik: FormikHelpers<typeof INITIAL_VALUES>) => {
    dispatch(SendMessage({ message, to: userId }));
    formik.resetForm();
  };

  const voiceHandler = async () => {
    if (!isRecording) {
      try {
        StreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
        StreamRef.current.getAudioTracks();
        RecorderRef.current = new MediaRecorder(StreamRef.current);
        RecorderRef.current.start();

        RecorderRef.current.ondataavailable = e => {
          ChunksRef.current.push(e.data);
        };
        RecorderRef.current.onstop = _ => {
          dispatch(SendVoice({ media: new Blob(ChunksRef.current), to: userId }));
        };
        setRecording(prev => !prev);
      } catch (error) {
        createNotification({
          type: 'error',
          message: error.message
        });
        // NotFoundError
        // NotAllowedError
      }
    } else {
      RecorderRef!.current!.stop();
      StreamRef!.current!.getTracks().forEach(track => track.stop());
      ChunksRef.current = [];
    }
  };

  return (
    <StyledWrapper>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={messageValidation}
        validateOnMount
        onSubmit={sendMessageHandler}
      >
        {({
          isValid
        }) => (
          <Form>
            <ControlWrapper>
              <Button disabled={!isWsUp} type="button" onClick={attachTrigger} icon={AttachImgIcon} transparent title={translation.t('attach')} />
              <StyledFile ref={attachRef} onChange={onLoadFile} accept=".png,.jpg" />
              <TextField name="message" placeholder={translation.t('sendPlaceholder')} fullWidth />
              <Button onClick={voiceHandler} type="button" title={translation.t('send')}>
                {isRecording ? 'stop' : 'start'}
              </Button>
              <Button disabled={!isWsUp || !isValid} type="submit" icon={SendIcon} transparent title={translation.t('send')} />
            </ControlWrapper>
          </Form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default MessageControls;