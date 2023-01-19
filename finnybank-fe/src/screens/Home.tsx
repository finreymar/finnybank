/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useWindowDimensions } from 'react-native';

import { ScrollView, Text, VStack } from 'native-base';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { SharedElement } from 'react-navigation-shared-element';

import axios from 'axios';
import type { CardItem, RootStackParamList } from '../types';

import CCard from '../components/CreditCard';
import Header from '../components/Header';
import View from '../components/View';

import CardBgP1 from '../../assets/spongebob-wp1.png';
import CardBgL1 from '../../assets/spongebob-wp3.png';

import CardIssuerPLogo from '../../assets/card-issuer-p-logo.png';

import CardIssuerLLogo from '../../assets/card-issuer-l-logo.png';

import MCPLogo from '../../assets/mc-p-logo.png';
import MCLLogo from '../../assets/mc-l-logo.png';
import { CurrencyNumberFormat } from '../utils';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const cardData: Array<CardItem> = [
  {
    balance: 2748.0,
    cardBackgroundL: CardBgL1,
    cardBackgroundP: CardBgP1,
    cardExpiryMonth: 4,
    cardExpiryYear: 2024,
    cardIssuerLogoL: CardIssuerLLogo,
    cardIssuerLogoP: CardIssuerPLogo,
    cardLogoL: MCLLogo,
    cardLogoP: MCPLogo,
    cardNumber: '123 456 789 000',
    name: 'My Account',
  },
];

export default function Home({ navigation }: HomeProps) {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();
  const [data, setData] = useState('');

  const authKey = 'insert-token-here';
  const reqid = 'insert-xid-request';

  // eslint-disable-next-line @typescript-eslint/dot-notation
  axios.defaults.headers.common['Authorization'] = `Bearer ${authKey}`;
  axios.defaults.headers.common['x-request-id'] = reqid;

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          'insert-rest-api-url',
        );
        const sdata = response.data.balances[0].amount.amount;
        setData(sdata);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // screen height - header width - footer width
  const bodyHeight = screenHeight - 124 - 70;
  const cardHeight = bodyHeight * 0.5;

  const [activeCarouselIndex, setActiveCarouselIndex] = React.useState(0);
  const [activeCard, setActiveCard] = React.useState(cardData[0]);
  const carouselRef = React.useRef<Carousel<CardItem> | null>();

  // istanbul ignore next
  React.useEffect(() => {
    setActiveCard(cardData[activeCarouselIndex]);
  }, [activeCarouselIndex]);

  return (
    <View>
      <Header>Hi, Martin!</Header>
      <ScrollView
        style={{
          minHeight: bodyHeight,
        }}
      >
        <VStack padding={6} space={4}>
          <VStack>
            <Text color="#FFF" fontSize="xl" fontWeight="bold">
              Balance
            </Text>
            <Text color="#fff" fontSize="3xl" fontWeight="bold">
              {/* {CurrencyNumberFormat.format(activeCard.balance)} */}
              {CurrencyNumberFormat.format(data)}
            </Text>
          </VStack>
        </VStack>
        <Carousel<CardItem>
          data={cardData}
          itemWidth={cardHeight * 0.63}
          onSnapToItem={(index) => {
            // istanbul ignore next
            setActiveCarouselIndex(index);
          }}
          ref={(c) => {
            carouselRef.current = c;
          }}
          renderItem={
            // istanbul ignore next
            ({ item }) => {
              const onCardPress = () => {
                navigation.navigate('SharedCardDetail', { item });
              };

              return (
                <SharedElement
                  id={`card-${item.cardNumber.replace(' ', '')}`}
                  style={{
                    justifyContent: 'flex-end',
                  }}
                >
                  <CCard
                    cardBackground={item.cardBackgroundL}
                    cardExpiryMonth={item.cardExpiryMonth}
                    cardExpiryYear={item.cardExpiryYear}
                    width={cardHeight}
                    cardIssuerLogo={item.cardIssuerLogoL}
                    cardLogo={item.cardLogoL}
                    cardNumber={item.cardNumber}
                    onPress={onCardPress}
                    style={{
                      height: cardHeight,
                      transform: [
                        {
                          rotate: '-90deg',
                        },
                      ],
                      width: cardHeight,
                    }}
                    withShadow={false}
                  />
                </SharedElement>
              );
            }
          }
          sliderWidth={screenWidth}
        />
        <Pagination
          activeDotIndex={activeCarouselIndex}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          /* @ts-ignore */
          carouselRef={carouselRef}
          dotColor="#FFFFFF"
          dotContainerStyle={{
            marginHorizontal: 2,
          }}
          dotsLength={cardData.length}
          dotStyle={{
            borderRadius: 4,
            height: 4,
            marginHorizontal: 0,
            width: 30,
          }}
          inactiveDotColor="#2D3757"
          inactiveDotOpacity={1}
          inactiveDotScale={0.7511}
        />
      </ScrollView>
    </View>
  );
}
