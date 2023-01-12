import { create } from 'apisauce';
import { getAppLanguage } from '@local';

export const Dev_BaseURL = 'https://dinar-staging.dhaif.io/api';
export const baseURL = 'https://api.dinar.sa/api';

export const API = create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': getAppLanguage(),
  },
});
API.addMonitor(() => {});
