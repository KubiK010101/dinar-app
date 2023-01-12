export type ColorsTypes = {
  PRIMARY: string;
  WHITE: string;
  BLACK: string;
  GRAY: any;
  DARK_GRAY1: string;
  DARK_GRAY: any;
  LIGHT_GRAY: any;
  LIGHT_GRAY1: string;
  LIGHT_GRAY2: string;
  DARK_BLUE: any;
  LIGHT_BLUE: string;
  TEXT_COLOR: string;
  BORDER: string;
  BLUE: string;
  GREEN: string;
  GREEN2: string;
  GREEN3: string;
  RED: string;
  ORANGE: string;
  ORANGE_DARK: string;
  RGBA_BLUE: any;
  RGBA_BLACK: any;
  RGBA_WHITE: any;
  RGBA_GRAY: any;
  RGBA_LEIGHT_BLUE: any;
};

const Colors: ColorsTypes = {
  PRIMARY: '#7322A7',
  WHITE: '#fff',
  BLACK: '#000',
  GRAY: '#707070',
  DARK_GRAY1: '#4A4A4A',
  DARK_GRAY: '#212524',
  LIGHT_GRAY: '#CBD0D6',
  LIGHT_GRAY1: '#ebedf0',
  LIGHT_GRAY2: '#B7B9C5',
  DARK_BLUE: '#0B3870',
  LIGHT_BLUE: '#626E7C',
  TEXT_COLOR: '#455467',
  BORDER: '#F1F1F1',
  BLUE: '#085897',
  GREEN: '#1CB398',
  GREEN2: '#00B398',
  GREEN3: '#00f291',
  RED: '#ff0000',
  ORANGE: '#E8A231',
  ORANGE_DARK: '#F96510',
  RGBA_BLUE: (opacity: number) => `rgba(68, 146, 210,${opacity})`,
  RGBA_BLACK: (opacity: number) => `rgba(0,0,0,${opacity})`,
  RGBA_WHITE: (opacity: number) => `rgba(255,255,255,${opacity})`,
  RGBA_GRAY: (opacity: number) => `rgba(222, 220, 220,${opacity})`,
  RGBA_LEIGHT_BLUE: (opacity: number) => `rgba(156, 177, 204,${opacity})`,
};
export { Colors };
export const RGBA_BLACK = (opacity: number) => `rgba(0,0,0,${opacity})`;
export const RGBA_WHITE = (opacity: number) => `rgba(255,255,255,${opacity})`;

export function HEXtoRGBA(hex: string, opacity: number = 1): string {
  hex = hex.replace(/#/g, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(function (_hex) {
        return _hex + hex;
      })
      .join('');
  }
  var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
  if (result) {
    var red = parseInt(result[1], 16);
    var green = parseInt(result[2], 16);
    var blue = parseInt(result[3], 16);
    return `rgba(${red}, ${green}, ${blue},${opacity})`;
  } else {
    // invalid color
    return '';
  }
}
