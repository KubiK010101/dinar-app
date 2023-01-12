import { Auction, Bid, InvestmentStatsTypes } from '@types';

export type AuctionsStateTypes = {
  auctions: Array<Auction>;
  bids: Array<Bid>;
  investmentStats: InvestmentStatsTypes;
};

export const auctionsInitialState: AuctionsStateTypes = {
  bids: [
    {
      id: 1,
      isMe: true,
      profit_margin: '7.5',
      required_quantity: 2333,
      acceptable_quantity: 0,
      is_top: true,
    },
    {
      id: 2,
      isMe: false,
      profit_margin: '10',
      required_quantity: 2000,
      acceptable_quantity: 0,
    },
    {
      id: 3,
      isMe: true,
      profit_margin: '17.1',
      required_quantity: 1200,
      acceptable_quantity: 300,
    },
    {
      id: 4,
      isMe: false,
      profit_margin: '12.5',
      required_quantity: 2500,
      acceptable_quantity: 700,
    },
    {
      id: 5,
      isMe: false,
      profit_margin: '14.5',
      required_quantity: 300,
      acceptable_quantity: 100,
    },
    {
      id: 6,
      isMe: false,
      profit_margin: '30.5',
      required_quantity: 1000,
      acceptable_quantity: 0,
    },
    {
      id: 7,
      isMe: false,
      profit_margin: '21.5',
      required_quantity: 1000,
      acceptable_quantity: 50,
    },
  ],
  auctions: [
    {
      id: 1,
      isMe: true,
      profit_margin: '7.5',
      required_quantity: 2333,
      acceptable_quantity: 0,
      is_top: true,
      startDate: '2022-12-27T10-10-10',
      status: 'ACTIVE',
    },
    {
      id: 2,
      isMe: false,
      profit_margin: '10',
      required_quantity: 2000,
      acceptable_quantity: 1200,
      startDate: '2022-11-27T10-10-10',
      status: 'CLOSED',
    },
    {
      id: 3,
      isMe: true,
      profit_margin: '17.1',
      required_quantity: 1000,
      acceptable_quantity: 500,
      startDate: '2022-11-27T10-10-10',
      status: 'ACTIVE',
    },
    {
      id: 4,
      isMe: false,
      profit_margin: '12.5',
      required_quantity: 1000,
      acceptable_quantity: 500,
      startDate: '2022-11-27T10-10-10',
      status: 'ACTIVE',
    },
    {
      id: 5,
      isMe: false,
      profit_margin: '14.5',
      required_quantity: 1000,
      acceptable_quantity: 500,
      startDate: '2022-11-27T10-10-10',
      status: 'ACTIVE',
    },
    {
      id: 6,
      isMe: false,
      profit_margin: '30.5',
      required_quantity: 1000,
      acceptable_quantity: 500,
      startDate: '2022-11-27T10-10-10',
      status: 'ACTIVE',
    },
    {
      id: 7,
      isMe: false,
      profit_margin: '21.5',
      required_quantity: 1000,
      acceptable_quantity: 500,
      startDate: '2022-11-27T10-10-10',
      status: 'ACTIVE',
    },
  ],
  investmentStats: {
    fulfilledOrdersCount: 0,
    investmentsAmountTotalInHalalah: 0,
    profitTotalInHalalah: 0,
  },
};

export * from './actions';
