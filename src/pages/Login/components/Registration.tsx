import React, { useEffect } from 'react';
import { AvatarList } from 'components/Avatar';
import { Col } from 'components/Grid';
import TextField from 'components/TextField';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getIsAppError } from 'store/app/selectors';
import { useFormikContext } from 'formik';
import { getIsRegistr } from '../store/selectors';

interface IProps {
  username: string;
}

const Registration: React.FC<IProps> = ({ username }) => {
  const translation = useTranslation(['pages/login']);
  const error = useSelector(getIsAppError);
  const isSuccessRegistr = useSelector(getIsRegistr);
  const formikContext = useFormikContext();

  useEffect(() => {
    if (error === 'LOGIN_EXIST') 
      formikContext.setFieldError('regLogin', translation.t('user_exist'));

  }, [error]);

  useEffect(() => {
    if (isSuccessRegistr) formikContext.resetForm();
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