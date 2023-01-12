export type WalletTypes = {
  id: string;
  walletType: 'INVESTOR';
  balanceInHalalah: number;
  virtualIban: string;
  virtualAccount: string;
  createdAt: string;
  updatedAt: string;
  syncedAt: string;
  createWalletResponse: {
    aggregateId: string;
    aggregateType: 'Wallet';
    type: 'WalletIssued';
    payload: {
      event: 'WalletIssued';
      type: 'INVESTOR';
      userId: string;
      walletId: string;
      virtualAccount: string;
      virtualIban: string;
    };
    createdAt: string;
    id: number;
  };
};

export type TransactionTypes = {
  id: number;
  transactionType: 'WalletIssued' | 'MoneyTransferredOut' | 'MoneyDeposited';
  amountInHalalah: string;
  createdAt: string;
  syncedAt: string;
  wallet: WalletTypes;
  event: 'WalletIssued';
  reason: 'WalletIssued';
  reasonAr: string;
};
export type BankTypes = {
  bankAccountName: string;
  accountName?: string;
  bankName: string;
  iban: string;
  key?: string;
};
