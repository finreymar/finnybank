import React from 'react';

import { HStack, Icon, Text, VStack } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import BaseBottomSheet, {
  type BottomSheetProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import type { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { TransactionHistory } from '../types';

import { CurrencyNumberFormat } from '../utils';

const TransactionHistories: Array<TransactionHistory> = [
  {
    amount: 143.0,
    colors: ['#EC5B8F', '#DA3181'],
    description: 'Mom',
    icon: 'download-outline',
    name: 'Transfer',
    img: 's',
  },
  {
    amount: 3.0,
    colors: ['#EC5B8F', '#DA3181'],
    description: '-',
    icon: 'download-outline',
    name: 'Interest Earned',
    img: 's',
  },
];

export function TransactionBottomSheetContent() {
  return (
    <BottomSheetScrollView>
      <VStack paddingLeft={6} paddingRight={6} paddingTop={2} space={2}>
        <Text color="#FFF" fontSize="xl" fontWeight="bold">
          Today
        </Text>
        <VStack>
          {TransactionHistories.map((item, index) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <HStack key={`current-transaction-${index}`} space={4}>
              <LinearGradient
                colors={item.colors}
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 9999,
                  height: 40,
                  justifyContent: 'center',
                  width: 40,
                }}
              >
                <Icon as={Ionicons} color="#FFF" name={item.icon} size="md" />
              </LinearGradient>
              <HStack
                style={{
                  borderBottomColor: '#FFF',
                  borderBottomWidth: 0.01,
                  flex: 1,
                  height: 80,
                }}
              >
                <VStack
                  flex={1}
                  style={{
                    justifyContent: 'center',
                  }}
                >
                  <Text color="#FFF" fontSize="lg">
                    {item.name}
                  </Text>
                  <Text color="#FFF" fontSize="md">
                    {item.description}
                  </Text>
                </VStack>
                <Text
                  alignSelf="center"
                  color="#FFF"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  {item.amount > 0 ? '+ ' : '- '}
                  {CurrencyNumberFormat.format(Math.abs(item.amount))}
                </Text>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </BottomSheetScrollView>
  );
}

const BottomSheet = React.forwardRef<BottomSheetMethods, BottomSheetProps>(
  ({ children, ...props }: BottomSheetProps, ref: any) => {
    return (
      <BaseBottomSheet
        animateOnMount
        backgroundStyle={{
          backgroundColor: '#f0c200',
        }}
        handleIndicatorStyle={{
          backgroundColor: '#fff',
          width: 55,
        }}
        index={0}
        ref={ref}
        {...props}
      >
        {children}
      </BaseBottomSheet>
    );
  },
);

export default BottomSheet;
