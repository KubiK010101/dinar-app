import { getQueryData, setQueryData, AppStateTypes } from '@query';
import { AppConfig } from '@types';

const currentConfigState = () => getQueryData<AppStateTypes>('config');

export const setAppConfig = (appConfig: AppConfig) => {
  setQueryData<AppStateTypes>('config', {
    appConfig: {
      ...currentConfigState(),
      ...appConfig,
    },
  });
};
