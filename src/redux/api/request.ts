import { ApiResponse, CancelToken } from 'apisauce';
import { CustomToast } from '@helpers';
import { API } from '.';
import APIs, { ApisTypes } from './APIs';
import { t } from 'i18next';
import { getQueryData, userLogout, enableLoader, disableLoader, AuthStateTypes } from '@query';
import { navigation } from '@navigation';

type ApiMethodsTypes = 'get' | 'post' | 'put' | 'delete' | 'patch';

export type UploadProgressTypes = {
  isTrusted: boolean;
  lengthComputable: number;
  loaded: number;
  total: number;
};

export async function request<T, R = null>({
  method,
  endPoint,
  callback,
  body,
  params,
  onUploadProgress,
  setCancelToken,
}: {
  method: ApiMethodsTypes;
  endPoint: keyof ApisTypes;
  body?: R;
  callback?: (_res: ApiResponse<T>) => void;
  params?: string;
  onUploadProgress?: (_event: UploadProgressTypes) => void;
  setCancelToken?: any;
}) {
  const { token } = getQueryData<AuthStateTypes>('auth');

  enableLoader(endPoint);
  if (token) API.setHeader('Authorization', `Bearer ${token}`);
  const res: ApiResponse<T & ErrorResponseType> = await API[method](
    `${APIs[endPoint]}${params ? params : ''}`,
    body ? body : {},
    {
      onUploadProgress,
      cancelToken: new CancelToken(function executor(c) {
        if (setCancelToken) setCancelToken(c);
      }),
    },
  );
  disableLoader(endPoint);

  try {
    if (res.data?.message === 'jwt expired' || res.data?.message === 'Unauthorized') {
      navigation.reset({ routes: [{ name: 'Login' }] });
      userLogout();
    } else {
      if (callback) callback(res);

      if (res.ok) return res.data;
      else handilErrors(res.data);
    }
  } catch (e) {
    CustomToast('Network error', 'error');
  }
}

const handilErrors = (data: any) => {
  if (!data || skipedErrors(data.message)) return;
  return CustomToast(localizedErrorMessage(data.message), 'error');
};

const localizedErrorMessage = (message: string) => {
  switch (message) {
    case 'You reached investment limit per program of 20000':
      return t('messages.reachedInvestmentLimit');
    case 'User is under age, only 18 years and above users are allowed':
      return t('messages.userIsUnderAge');
    default:
      return message;
  }
};
const skipedErrors = (error: string) => {
  switch (error) {
    case 'Another running process already exists':
    case 'Error fetching national address':
      return true;
    default:
      return false;
  }
};
type ErrorResponseType = {
  detail: string;
  code: 'token_not_valid';
  message: string;
};
// return {
//     minimumBuildNumber: 0,
//     maintenanceMode: false,
//     maintenanceMessage: null,
// }
