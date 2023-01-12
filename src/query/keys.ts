export type QueryKeysTypes<T = string> = {
  transactions: T;
  opportunities: T;
  walletInfo: T;
  inverstments: T;
  investmentOrders: T;
  investmentStats: T;
  config: T;
  auth: T;
  loader: T;
  auctions: T;
};

const QueryKeys: QueryKeysTypes = {
  transactions: 'TRANSACTIONS',
  opportunities: 'OPPORTUNITIES',
  walletInfo: 'WALLET_INFO',
  inverstments: 'INVESTMENTS',
  investmentOrders: 'INVESTMENT_ORDERS',
  investmentStats: 'INVESTMENT_STATS',
  auth: 'AUTH',
  config: 'CONFIG',
  loader: 'LOADER',
  auctions: 'AUCTIONS',
};

export default QueryKeys;
