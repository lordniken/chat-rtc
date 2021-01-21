import React from 'react';
import { AvatarList } from 'components/Avatar';
import { Col } from 'components/Grid';
import TextField from 'components/TextField';
import { useTranslation } from 'react-i18next';

interface IProps {
  username: string;
}

const Registration: React.FC<IProps> = ({ username }) => {
  const translation = useTranslation(['pages/login']);

  return (
    <>
      <Col gutter>
        <TextField name="username" label={translation.t('login')} />
      </Col>
      <Col gutter>
        <TextField name="password" label={translation.t('password')} />
      </Col>      
      <Col gutter>
        <AvatarList name="avatar" userName={username} />
      </Col>  
    </>
  );
};

/*
      

*/

export default Registration;