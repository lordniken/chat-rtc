import React from 'react';
import { useField } from 'formik';
import { Avatar, AvatarIcons } from '.';
import { StyledWrapper, StyledAvatarWrapper } from './styles';

interface IAvatarListProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  userName: string;
}

const AvatarList: React.FC<IAvatarListProps> = ({ name, userName, ...rest }) => {
  const avatars = [...Object.values(AvatarIcons), undefined];
  const [field, meta] = useField({ name, type: 'radio' });

  return (
    <StyledWrapper>
      {
        avatars.map((avatar) => (
          <StyledAvatarWrapper key={avatar || 'defaultUser'}>
            <input        
              {...rest}
              {...field}
              checked={meta.value === (avatar || 'default')}
              type="radio"
              value={avatar || 'default'}
            />
            <Avatar title={userName || 'user'} icon={avatar} size="small" />
          </StyledAvatarWrapper>
        ))
      }
    </StyledWrapper>
  );
};

export default React.memo(AvatarList);
