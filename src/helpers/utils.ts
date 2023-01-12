/* eslint-disable radix */
import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { InvestmentStatus, OpportunityTypes, FilterOptionTypes } from '../@types';
import { Colors } from '../config';
import i18n from '../local/i18n';
import { API, baseURL, Dev_BaseURL } from '../redux/api';
import TouchID from 'react-native-touch-id';

export const fixString = () => {
  return '';
};

export const isString = (value: any) => {
  return typeof value === 'string';
};
export const getTimeFormat = (time: number) => {
  const m = parseInt(`${time / 1000 / 60}`);
  const s = Math.floor(time / 1000) % 60;
  return `0${m}:${s < 10 ? `0${s}` : s}`;
};

export const formatTime = (time: number) => {
  const hours = parseInt(`${time / 3600}`);
  const minutes = parseInt(`${time / 60}`) % 60;
  const s = parseInt(`${time % 60}`);
  if (hours)
    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
      s < 10 ? `0${s}` : s
    }`;
  else return `${minutes < 10 ? `0${minutes}` : minutes}:${s < 10 ? `0${s}:00` : s}`;
};

export const capitalizeString = (text: string) => {
  const st = text.charAt(0).toUpperCase() + text.slice(1, text.length);
  return st;
};

export const wait = async (s: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, s);
  });
};

export const retry = (fun: () => void, count: number = 1) => {
  let countDown = 0;
  let interval = setInterval(() => {
    countDown++;
    fun();
    if (countDown === count) clearInterval(interval);
  }, 1000);
  return interval;
};
// ----------------------- fixNumber ----------------------- //
var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

export const fixNumber = (str?: string) => {
  if (typeof str === 'string') {
    for (var i: number = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i.toString()).replace(arabicNumbers[i], i.toString());
    }
  }
  return str || '';
};

export const formatPrice = (price: number, decimal?: boolean) => {
  let value = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return decimal ? value : value.split('.')[0];
};

export const getOpportunityStatus = (item: OpportunityTypes) => {
  if (item.isOpen && item.availableSuks > 0)
    return {
      color: '#1A873D',
      status: i18n.t('opportunityStatus.available'),
      status_key: 'available',
    };
  else if (!item.isOpen && item.availableSuks > 0)
    return {
      color: Colors.ORANGE,
      status: i18n.t('opportunityStatus.upcoming'),
      status_key: 'upcoming',
    };
  else
    return { color: '#C7181F', status: i18n.t('opportunityStatus.closed'), status_key: 'closed' };
};

export const getInvestmentStatus = (status: InvestmentStatus) => {
  switch (status) {
    case 'CANCELED':
      return { color: '#C7181F', status: i18n.t('opportunityStatus.closed') };
    case 'FULFILLED':
      return { color: '#63D387', status: i18n.t('opportunityStatus.fulfilled') };
    case 'ISSUED':
      return { color: '#1A873D', status: i18n.t('opportunityStatus.issued') };
    case 'REJECTED':
      return { color: '#C7181F', status: i18n.t('opportunityStatus.rejected') };
    case 'PENDING':
      return { color: Colors.ORANGE, status: i18n.t('opportunityStatus.pending') };
    case 'MATURED':
      return { color: Colors.LIGHT_BLUE, status: i18n.t('opportunityStatus.matured') };
    default:
      break;
  }
};

export function handlePagination<T>(
  oldList: Array<T>,
  newList: Array<T>,
  current_page: number,
  next_page: string,
  reset?: boolean,
) {
  if (current_page === 1 || reset) return newList;
  else return oldList.concat(newList);
}

export function getNextPage(url: string, param?: string) {
  const _param = param || 'page';
  // eslint-disable-next-line no-useless-escape
  const name = _param.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  return results == null ? false : parseInt(`${results[1]}`);
}

export const donwloadFile = (
  fileUrl: string,
  filename: string,
  method: 'GET' | 'POST',
  headers: { [key: string]: string },
  callback: (_data: string) => void,
) => {
  let { dirs } = RNFetchBlob.fs;
  RNFetchBlob.config({
    path: dirs.DocumentDir + filename,
  })
    .fetch(method, fileUrl, headers)
    .then(async res => {
      const base64 = await res.base64();
      if (callback) {
        callback(base64);
      }
      // writeFile(res.data, base64, "base64")
    })
    .catch((_errorMessage: any) => {});
};

export const ibanFormater = (value: string, firstLength: number = 2): string => {
  const strToArray = Object.assign([], value.slice(firstLength, value.length));
  const size = 4;
  const data = strToArray.reduce((acc: Array<any>, curr, i: number) => {
    if (!(i % size)) acc.push(strToArray.slice(i, i + size));
    return acc;
  }, []);

  const _value = data
    .map((__value: Array<string>) => __value.toString().split(',').join(''))
    .toString()
    .split(',')
    .join('  ');
  return fixNumber(`${value.slice(0, firstLength)}${value.length > 2 ? '  ' : ''}${_value}`);
};

export const validatePrice = (_value: string) => {
  const dotLength = Object.assign([], _value).filter(elem => elem === '.').length;
  const validatess = dotLength ? _value.split('.')[1].length <= 2 : true;
  if (dotLength <= 1 && validatess) {
    return true;
  }

  return false;
};
export const isIos = () => Platform.OS === 'ios';

export const isTestAccount = (email: string) => {
  const testAccounts = ['apple@dinar.sa'];
  if (testAccounts.includes(email) || /@testers.dinar.sa$/.test(email.toLowerCase())) {
    API.setBaseURL(Dev_BaseURL);
  } else API.setBaseURL(baseURL);
};

export const orderingList = (arr: any[], comparisonKey: string, ascending = true): any[] => {
  const newArr = arr.sort((a, b) => {
    if (ascending) return Date.parse(a[comparisonKey]) - Date.parse(b[comparisonKey]);
    else return Date.parse(b[comparisonKey]) - Date.parse(a[comparisonKey]);
  });
  return newArr;
};

export const onFilterOptions = (
  filters: FilterOptionTypes,
  filterOption: FilterOptionTypes[],
  defaultFilters: FilterOptionTypes[],
) => {
  let _filterOptions: Array<any> = [...filterOption];
  if (filters.value === 'ALL') return defaultFilters;

  if (
    !_filterOptions.find((element: any) => element.value === filters.value) ||
    !filterOption.length
  ) {
    _filterOptions = _filterOptions.filter(element => element.value !== 'ALL');
    _filterOptions.push(filters);
  } else _filterOptions = _filterOptions.filter(element => element.value !== filters.value);

  if (!_filterOptions.length) return defaultFilters;

  return _filterOptions;
};

export const tryTouchId = async () => {
  return await TouchID.authenticate('FaceID to allow you access to your account');
};
