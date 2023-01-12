import { authInitialState } from './Auth';
import { appInitialState } from './App';
import { auctionsInitialState } from './Auctions';
import { loaderInitialState } from './Loader';

export const initialData = {
  AUTH: authInitialState,
  CONFIG: appInitialState,
  LOADER: loaderInitialState,
  AUCTIONS: auctionsInitialState,
};

export * from './Auth';
export * from './App';
export * from './Loader';
export * from './Auctions';
