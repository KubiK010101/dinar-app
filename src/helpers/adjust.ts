import { config } from '@config';
import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';

const Events = {
  BrowseOpportunity: 'ewnqvw',
  completekyc: '7abrg2',
  investOpportunity: 'funa2c',
  login: 'ek9zse',
  register: 'zdrkk1',
};

const adjustInit = (mode: 'Sandbox' | 'Production' = 'Sandbox') => {
  const adjustConfig = new AdjustConfig(
    config.adjustAppToken,
    mode === 'Production' ? AdjustConfig.EnvironmentProduction : AdjustConfig.EnvironmentSandbox,
  );

  Adjust.create(adjustConfig);
};

const trackEvent = (eventName: keyof typeof Events, revenue?: number) => {
  const adjustEvent = new AdjustEvent(Events[eventName]);
  if (revenue) {
    adjustEvent.setRevenue(revenue, 'SAR');
  }
  Adjust.trackEvent(adjustEvent);
};

export { adjustInit, trackEvent };
