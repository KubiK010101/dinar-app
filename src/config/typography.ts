import { scale } from './dimensions';

type FontFamilyTypes = {
  Bold: string;
  Medium: string;
  Regular: string;
  SemiBold: string;
  MarkaziRegular: string;
};

type FontSizeTypes = {
  H1: number;
  H2: number;
  H3: number;
  H4: number;
  P: number;
  FS18: number;
  FS14: number;
  FS13: number;
  FS15: number;
  FS16: number;
  FS6: number;
  FS11: number;
  FS7: number;
  FS10: number;
  FS8: number;
  FS20: number;
  FS22: number;
  FS24: number;
  FS26: number;
  S26: number;
  FS30: number;
  FS32: number;
  FS35: number;
  FS40: number;
};

const fonts: FontFamilyTypes = {
  Bold: 'Janna LT Bold',
  Medium: 'Janna LT Regular',
  Regular: 'Janna LT Regular',
  SemiBold: 'Janna LT Regular',
  MarkaziRegular: 'MarkaziText-Regular',
};

const fontSizes: FontSizeTypes = {
  H1: scale(22),
  H2: scale(16),
  H3: scale(12),
  H4: scale(9),
  P: scale(12),
  FS18: scale(18),
  FS14: scale(14),
  FS15: scale(15),
  FS16: scale(16),
  FS20: scale(20),
  FS22: scale(22),
  FS24: scale(24),
  FS26: scale(26),
  S26: scale(26),
  FS30: scale(30),
  FS32: scale(32),
  FS35: scale(35),
  FS40: scale(40),
  FS6: scale(6),
  FS11: scale(11),
  FS7: scale(7),
  FS10: scale(10),
  FS13: scale(13),

  FS8: scale(8),
};

export { fonts, fontSizes };
export type { FontSizeTypes, FontFamilyTypes };
