import { LoaderStateTypes } from '.';
import { getQueryData, invalidateQuery, setQueryData } from '@query';

const currentLoaderState = () => getQueryData<LoaderStateTypes>('loader');

const changeQueryData = (key: keyof LoaderStateTypes, loading: boolean) => {
  setQueryData<LoaderStateTypes>('loader', {
    ...currentLoaderState(),
    [key]: loading,
  });
  invalidateQuery('loader');
};

export const enableLoader = (key: keyof LoaderStateTypes) => {
  changeQueryData(key, true);
};

export const disableLoader = (key: keyof LoaderStateTypes) => {
  changeQueryData(key, false);
};
