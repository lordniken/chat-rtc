import React, { useEffect } from 'react';
import { AvatarList } from 'components/Avatar';
import { Col } from 'components/Grid';
import TextField from 'components/TextField';
import useNotifications from 'hooks/useNotifications';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import { getIsAppSuccessed } from 'store/app/selectors';
import { setAppSuccess } from 'store/app';

interface IProps {
  username: string;
}

const Registration: React.FC<IProps> = ({ username }) => {
  const translation = useTranslation(['pages/login']);
  const isSuccessRegistr = useSelector(getIsAppSuccessed);
  const formikContext = useFormikContext();
  const dispatch = useDispatch();
  const { createNotification } = useNotifications();

  useEffect(() => {
    if (isSuccessRegistr) {
      createNotification({
        type: 'success',
        message: translation.t('user_created'),
        delay: 10000
      });
      dispatch(setAppSuccess(false));
      formikContext.resetForm();
    }
  }, [isSuccessRegistr]);
  
  return (
    <>
      <Col gutter>
        <TextField name="regLogin" placeholder={translation.t('placeholders.login')} label={translation.t('login')} />
      </Col>
      <Col gutter>
        <TextField name="regPwd" placeholder={translation.t('placeholders.password')} type="password" label={translation.t('password')} />
      </Col>      
      <Col gutter>
        <AvatarList name="avatar" userName={username} />
      </Col>  
    </>
  );
};

export default Registration;