import { getQueryData, setQueryData } from '@query';
import { Auction, Bid } from '@types';
import { auctionsInitialState, AuctionsStateTypes } from '.';

const currentAuctionsState = () => getQueryData<AuctionsStateTypes>('auctions');

const changeAuctionsData = (data: Partial<AuctionsStateTypes>) => {
  setQueryData<AuctionsStateTypes>('auctions', {
    ...currentAuctionsState(),
    ...data,
  });
};

export const setAuctions = (auctions: Auction[]) => {
  changeAuctionsData({
    auctions,
  });
};

export const setBids = (bids: Bid[]) => {
  changeAuctionsData({
    bids,
  });
};

export const resetAuctionsData = () => {
  changeAuctionsData({
    ...auctionsInitialState,
  });
};
