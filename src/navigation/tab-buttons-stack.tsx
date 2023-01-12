import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBottomComponent } from './TabBottomComponent/TabBottomComponent';
import { TabButtonStackTypes } from './navigation-types';

import MoreStack from './more-stack';
import TransactionsStack from './transactions-stack';
import HomeStack from './home-stack';
import InvestmentStack from './investment-stack';
import { useTranslation } from 'react-i18next';
import AuctionStack from './auction-stack';
import { appFetchers } from '@config';

const Tab = createBottomTabNavigator<TabButtonStackTypes>();

function TabButtonsStack() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBar={props => <TabBottomComponent {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        initialParams={{ icon: 'home', text: t('tabButtonStack.home') }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        initialParams={{ icon: 'money', text: t('tabButtonStack.investment') }}
        name="InvestmentStack"
        component={InvestmentStack}
      />
      {appFetchers.auction && (
        <Tab.Screen
          initialParams={{ icon: 'auction', text: t('tabButtonStack.auction') }}
          name="AuctionStack"
          component={AuctionStack}
        />
      )}
      <Tab.Screen
        initialParams={{ icon: 'wallet', text: t('tabButtonStack.transactions') }}
        name="TransactionsStack"
        component={TransactionsStack}
      />
      <Tab.Screen
        initialParams={{ icon: 'more', text: t('tabButtonStack.more') }}
        name="MoreStack"
        component={MoreStack}
      />
    </Tab.Navigator>
  );
}

export default memo(TabButtonsStack);
