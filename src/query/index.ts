import { QueryClient } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import QueryKeys from './keys';
import { getQueryData, setQueryData, invalidateQuery } from './utils';
import { initialData } from './InititalData';

const DAY_IN_MS = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //how long we're persisting data for
      cacheTime: DAY_IN_MS * 365,
      initialData: initialData,
    },
  },
});

const asyncStoragePersistor = createAsyncStoragePersister({
  storage: AsyncStorage,
});

export {
  queryClient,
  asyncStoragePersistor,
  QueryKeys,
  getQueryData,
  setQueryData,
  invalidateQuery,
};
export * from './InititalData';
