import { IconsName } from '@assets';

export type PaymentMethodTypes = {
  icon: IconsName;
  name: string;
  paymentType: PaymentTypes;
};

export type PaymentTypes = 'APPLE_PAY' | 'MADA';

export type PaymentForm = {
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
};
