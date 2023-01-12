import { AppConfig } from '@types';

export type AppStateTypes = {
  appConfig?: AppConfig | null;
};

export const appInitialState: AppStateTypes = {
  appConfig: null,
};

export * from './actions';
