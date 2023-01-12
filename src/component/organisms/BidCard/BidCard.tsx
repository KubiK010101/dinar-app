import React from 'react';
import { View } from 'react-native';
import { Button, Card, TitleWithValueCell } from '@component';
import { Bid } from '@types';
import { scale } from '@config';
import styles from './styles';
import { t } from 'i18next';

type BidCardProps = { item: Bid; withoutRemoveButton?: boolean };

function BidCard({ item, withoutRemoveButton }: BidCardProps) {
  const info: any = [
    { title: t('auction.profitMargin'), value: item.profit_margin },
    { title: t('auction.requiredQuantity'), value: item.required_quantity },
    {
      title: t('auction.acceptedQuantity'),
      value: item.acceptable_quantity,
      accepted_percentage: (item.acceptable_quantity / item.required_quantity) * 100,
    },
  ];

  return (
    <Card shadow="small" style={[styles.container, item.is_top && styles.container_background]}>
      {/* Actions */}
      {item.isMe && (
        <>
          <Button
            disabled
            text={t('auction.listOfBids.I')}
            style={styles.button}
            containerStyle={[styles.buttonContainer, { left: -scale(16) }]}
          />
          {!withoutRemoveButton && (
            <Button
              iconName="close"
              iconStyle={styles.buttonIcon}
              style={styles.button}
              containerStyle={styles.buttonContainer}
            />
          )}
        </>
      )}

      <View style={styles.content}>
        {info.map((element: any, index: number) => (
          <TitleWithValueCell
            key={`info${index}`}
            fontSize="P"
            iconColor={item.is_top && 'WHITE'}
            color={item.is_top ? 'WHITE' : 'LIGHT_BLUE'}
            reverse
            {...element}
          />
        ))}
      </View>
    </Card>
  );
}

export default BidCard;
