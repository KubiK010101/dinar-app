import { getQueryData, LoaderStateTypes, QueryKeys } from '@query';
import { ApisTypes } from '@APIs';
import { useQuery } from '@tanstack/react-query';

export const useLoader = (type: keyof ApisTypes, type2?: keyof ApisTypes) => {
  const fetchLoaderQuery = () => getQueryData<LoaderStateTypes>('loader');

  const { data }: { data: LoaderStateTypes | undefined } = useQuery({
    queryKey: [QueryKeys.loader],
    queryFn: fetchLoaderQuery,
  });
  return data ? data[type] || data[type2 || type] || false : false;
};
