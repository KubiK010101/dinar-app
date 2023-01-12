export type ScheduleType = {
  id: number;
  date: string;
  status: 'ACTIVE' | 'IDLE' | 'DUE' | 'CANCELED' | 'PULLED' | 'FAILED' | 'DISTRIBUTED';
  accruedDays: number;
  couponAmountInHalalah: number;
  principalAmountInHalalah: number;
  moneyPulled: boolean;
  capitalPaid: boolean;
};
export type OpportunityTypes = {
  id: number;
  opportunityStatus: 'CONSUMED';
  isArchived: boolean;
  isOpen: boolean;
  isListed: boolean;
  isFeatured: boolean;
  walletId: string;
  fundRaiserWalletId: string;
  numberOfSuks: number;
  soldSuks: number;
  availableSuks: number;
  sukPriceInHalalah: number;
  completedPercentage: number;
  createdAt: string;
  engine: {
    status: 'ACTIVE';
    suks: [
      {
        type: string;
        sukId: string;
        amount: number;
        walletId: string;
        sukIssuedAt: string;
        opportunityId: string;
        priceInHalalah: number;
        wikalaFeeInPercent: number;
      },
    ];
    opportunity: {
      type: 'OpportunityCreated';
      walletId: 'OPR_0000000025';
      numberOfSuks: 2;
      opportunityId: '25';
      sukPriceInHalalah: number;
      fundRaiserWalletId: 'FDR_0000000106';
    };
  };
  documents: {
    fileOpportunityPublish: number;
    fileOpportunityPublishedSummary: number;
  };
  issuance: {
    id: number;
    issuanceStatus: 'ACTIVATED';
    issuanceNo: 'ISSUANCE_001';
    sector: 'FARMING';
    fundPurpose: 'FP';
    fundPurposeOther: 'FPO';
    issuanceAmountInHalalah: number;
    issuanceParValueInHalalah: number;
    sukukQty: number;
    issuanceDate: string;
    maturityDate: string;
    investStartDate: string;
    maturity: number;
    apr: number;
    investmentPeriodReturn: number;
    paymentStatus: 'RUNNING';
    issuanceSerialNo?: string;
    murabahaFeesInHalalah: number;
    programFeesInHalalah: number;
    programFeesVatInHalalah: number;
    issuanceFeesInHalalah: number;
    issuanceFeesVatInHalalah: number;
    schedule: Array<ScheduleType>;
    createdAt: string;
    program: {
      id: number;
      programName: string;
      programAmountInHalalah: number;
      trusteeName: string;
      spvName: string;
      programDate: string;
      programState: 'ACTIVE';
      sukType: 'SUKUK';
      createdAt: string;
    };
  };
  link: string;
};

export type FilterOptionTypes = {
  name: string;
  value: string;
};
