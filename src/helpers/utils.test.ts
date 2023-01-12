import { expect } from '@jest/globals';
import {
  capitalizeString,
  fixNumber,
  formatPrice,
  formatTime,
  getInvestmentStatus,
  getNextPage,
  getOpportunityStatus,
  getTimeFormat,
  handlePagination,
  ibanFormater,
  isIos,
  isString,
  isTestAccount,
  orderingList,
  retry,
  tryTouchId,
  validatePrice,
  wait,
} from './utils';

jest.mock('rn-fetch-blob', () => jest.fn());
jest.mock('../config', () => jest.fn());
jest.mock('../local/i18n', () => jest.fn());
jest.mock('../redux/api', () => jest.fn());
jest.mock('react-native-touch-id', () => jest.fn());

describe('test isString function', () => {
  it('check if string', () => {
    const result = isString('str');
    expect(result).toBeTruthy();
  });
});

describe('test getTimeFormat function', () => {
  it('returns formatted time', () => {
    const result = getTimeFormat(100000);
    expect(result).toEqual('01:40');
  });
});

describe('test formatTime function', () => {
  it('formatTime method to be defined', () => {
    expect(formatTime).toBeDefined();
  });
  it('formatTime to be called when hours is a null', () => {
    const TIME = 258;
    const result = formatTime(TIME);
    expect(result).toEqual('04:18');
  });
  it('formatTime to be called when hours is not a null', () => {
    const TIME = 300;
    const result = formatTime(TIME);
    expect(result).toEqual('05:00:00');
  });
});
describe('test capitalizeString function', () => {
  it('capitalizeString method to be defined', () => {
    expect(capitalizeString).toBeDefined();
  });
  it('capitalizeString should return string wirh text in uppercase', () => {
    const STRING = 'hello';
    const result = capitalizeString(STRING);
    expect(result).toEqual('Hello');
  });
});
describe('test wait function', () => {
  it('wait method to be defined', () => {
    expect(wait).toBeDefined();
  });
  it('wait should resolve true', () => {
    wait(500).then(res => {
      expect(res).toBeTruthy();
    });
  });
});
describe('test retry function', () => {
  it('retry function has to be defined', () => {
    expect(retry).toBeDefined();
  });
  it('callback is called 2 times', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    retry(callback, 2);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
describe('test fixNumber function', () => {
  it('fixNumber function has to be defined', () => {
    expect(fixNumber).toBeDefined();
  });
  it('fixNumber has to return emty string if false parameter is passed', () => {
    const PARAMETER = '' || undefined;
    const result = fixNumber(PARAMETER);
    expect(result).toEqual('');
  });
  it('fixNumber converts arabian and persian numbers', () => {
    const PARAMETER = '۲';
    const result = fixNumber(PARAMETER);
    expect(result).toEqual('2');
  });
});
describe('test formatPrice function', () => {
  it('formatPrice function has to be defined', () => {
    expect(formatPrice).toBeDefined();
  });
  it('converts number price into formatted string', () => {
    const PARAMETER = 1566;
    const result = formatPrice(PARAMETER, false);
    expect(result).toEqual('1,566');
  });
  it('converts number into formatted string with decimal', () => {
    const PARAMETER = 15665;
    const result = formatPrice(PARAMETER, true);
    expect(result).toEqual('15,665.00');
  });
});

describe('test getOpportunityStatus function', () => {
  it('getOpportunityStatus function has to be defined', () => {
    expect(getOpportunityStatus).toBeDefined();
  });
});
describe('test getInvestmentStatus function', () => {
  it('getInvestmentStatus function has to be defined', () => {
    expect(getInvestmentStatus).toBeDefined();
  });
});
describe('test handlePagination function', () => {
  it('handlePagination function has to be defined', () => {
    expect(handlePagination).toBeDefined();
  });
  const oldList = [1, 2, 3];
  const newList = [4, 5];
  const next_page = 'string';
  it('should return new array', () => {
    const current_page = 1;
    const reset = true;
    const result = handlePagination(oldList, newList, current_page, next_page, reset);
    expect(result).toEqual([4, 5]);
  });
  it('should return concatenated array', () => {
    const current_page = 2;
    const reset = false;
    const result = handlePagination(oldList, newList, current_page, next_page, reset);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
describe('test getNextPage function', () => {
  it('getNextPage function has to be defined', () => {
    expect(getNextPage).toBeDefined();
  });
});
describe('test ibanFormater function', () => {
  it('ibanFormater function has to be defined', () => {
    expect(ibanFormater).toBeDefined();
  });
  const IBAN = '1111222233334444';
  it('should return string in IBAN format', () => {
    const result = ibanFormater(IBAN);
    expect(result).toEqual('11  1122  2233  3344  44');
  });
  it('should return string in IBAN format with first lenth', () => {
    const firstLength = 3;
    const result = ibanFormater(IBAN, firstLength);
    expect(result).toEqual('111  1222  2333  3444  4');
  });
});
describe('test validatePrice function', () => {
  it('validatePrice function has to be defined', () => {
    expect(validatePrice).toBeDefined();
  });
  it('should return true if price format is valid', () => {
    const PRICE = '2.45';
    const result = validatePrice(PRICE);
    expect(result).toBeTruthy();
  });
  it('should return false if price format is not valid', () => {
    const PRICE = '2.455';
    const result = validatePrice(PRICE);
    expect(result).toBeFalsy();
  });
});
describe('test isIos function', () => {
  it('isIos function has to be defined', () => {
    expect(isIos).toBeDefined();
  });
  it('should return boolean', () => {
    const result = typeof isIos() === 'boolean';
    expect(result).toBeTruthy();
  });
});
describe('test isTestAccount function', () => {
  it('isTestAccount function has to be defined', () => {
    expect(isTestAccount).toBeDefined();
  });
});
describe('test orderingList function', () => {
  it('orderingList function has to be defined', () => {
    expect(orderingList).toBeDefined();
  });
  const arr = [
    { id: 5, date: '02 Jan 1971' },
    { id: 7, date: '03 Jan 1972' },
    { id: 6, date: '01 Jan 1970' },
  ];
  it('should return incoming array if conparison key is wrong ', () => {
    const comparisonKey = 'i';
    const result = orderingList(arr, comparisonKey);
    expect(result).toEqual([
      { id: 5, date: '02 Jan 1971' },
      { id: 7, date: '03 Jan 1972' },
      { id: 6, date: '01 Jan 1970' },
    ]);
  });
  it('should return array in descending order', () => {
    const comparisonKey = 'id',
      ascending = false;
    const result = orderingList(arr, comparisonKey, ascending);
    expect(result).toEqual([
      { id: 7, date: '03 Jan 1972' },
      { id: 6, date: '01 Jan 1970' },
      { id: 5, date: '02 Jan 1971' },
    ]);
  });
  it('should return array in ascending order', () => {
    const comparisonKey = 'id',
      ascending = true;
    const result = orderingList(arr, comparisonKey, ascending);
    expect(result).toEqual([
      { id: 5, date: '02 Jan 1971' },
      { id: 6, date: '01 Jan 1970' },
      { id: 7, date: '03 Jan 1972' },
    ]);
  });
});
describe('test tryTouchId function', () => {
  it('tryTouchId function has to be defined', () => {
    expect(tryTouchId).toBeDefined();
  });
});
