export type AppConfig = {
  minimumBuildNumber: number;
  maintenanceMode: boolean;
  maintenanceMessage?: string;
  updateMessage: string;
  acceptedPaymentMethods: Array<'HYPERPAY' | 'WALLET'>;
};
