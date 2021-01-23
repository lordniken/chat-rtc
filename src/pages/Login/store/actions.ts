import sha from 'js-sha512';
import { ApiRequest } from 'store/app/actions';
import { ApiMethods } from 'store/app/types';
import { IRegValues } from './types';
import { setRegistr } from './slices';

export const RegistrationAction = (values: IRegValues) => {
  const { regPwd, ...rest } = values;
  const hashedPwd = sha.sha512(regPwd);

  return ApiRequest({
    url: 'auth/registration',
    method: ApiMethods.PUT,
    body: JSON.stringify(
      {
        ...rest,
        regPwd: hashedPwd
      }
    ),
    successAction: setRegistr
  });
};
