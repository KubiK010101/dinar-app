export type Auction = {
  id: number;
  isMe: boolean;
  profit_margin: string;
  required_quantity: number;
  acceptable_quantity: number;
  is_top?: boolean;
  startDate: string;
  status: 'ACTIVE' | 'CLOSED';
};
export type Bid = {
  id: number;
  isMe: boolean;
  profit_margin: string;
  required_quantity: number;
  acceptable_quantity: number;
  is_top?: boolean;
};
