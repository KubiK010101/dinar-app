import { ApisTypes } from '@APIs';

export type LoaderStateTypes = Partial<ApisTypes<boolean>>;

export const loaderInitialState: LoaderStateTypes = {};
export * from './actions';
