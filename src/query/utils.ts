import { queryClient } from './index';
import QueryKeys, { QueryKeysTypes } from './keys';

function getQueryData<T>(key: keyof QueryKeysTypes): T {
  try {
    let data: any = queryClient.getQueryData<T>([QueryKeys[key]]);
    if (data) return data;
    //try if this query is an infiniteQuery
    data = queryClient.getQueriesData<T>({ queryKey: [QueryKeys[key]] })[0][1];
    return data?.pages?.flatMap((page: any) => page);
  } catch {
    return tryToGetDefaultData(key);
  }
}

const tryToGetDefaultData = (key: keyof QueryKeysTypes) => {
  let inititalDataValue: any = queryClient.getDefaultOptions().queries?.initialData;
  return inititalDataValue ? inititalDataValue[QueryKeys[key]] : null;
};

function setQueryData<T>(key: keyof QueryKeysTypes, data: T) {
  queryClient.setQueryData([QueryKeys[key]], data);
}

const invalidateQuery = (queryKey: keyof QueryKeysTypes) =>
  queryClient.invalidateQueries({ queryKey: [QueryKeys[queryKey]] });

export { getQueryData, setQueryData, invalidateQuery };
