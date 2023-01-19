import React from 'react';

import { Image, View as RNView } from 'react-native';

import {
  Box,
  Divider,
  FlatList,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base';

import { LinearGradient } from 'expo-linear-gradient';

import DashedLine from 'react-native-dashed-line';

import type { TransactionHistory } from '../types';
import Header from '../components/Header';
import View from '../components/View';

// import SB from '../../assets/spongebob.png';
/* eslint-disable global-require */
const catalogueData: Array<TransactionHistory> = [
  {
    amount: 34.0,
    colors: ['#68ADFF', '#4F45FF'],
    icon: require('../../assets/spongebob.png'),
    name: 'Spongebob Theme',
    img: 'Who?',
  },
];

export default function Catalogue() {
  const [dashedLineVisible, setDashedLineVisibility] = React.useState(false);

  return (
    <View>
      <Header>Themes</Header>
      <Box safeAreaBottom>
        {
          /* istanbul ignore next */ dashedLineVisible && (
            <DashedLine dashColor="#FFF" />
          )
        }
        <FlatList
          bounces={false}
          data={catalogueData}
          onScroll={({
            nativeEvent: {
              contentOffset: { y },
            },
          }) => {
            // istanbul ignore next
            setDashedLineVisibility(y > 30);
          }}
          renderItem={({ item }) => {
            return (
              <Divider>
                <HStack
                  space={4}
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <LinearGradient
                    colors={['#68ADFF', '#4F45FF']}
                    style={{
                      alignItems: 'center',
                      borderRadius: 9999,
                      height: 40,
                      justifyContent: 'center',
                      width: 40,
                    }}
                  >
                    <Image
                      source={require('../../assets/spongebob.png')}
                      style={{ height: 46, width: 46 }}
                    />
                  </LinearGradient>
                  <HStack
                    style={{
                      borderBottomColor: 'transparent',
                      borderBottomWidth: 1,
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
                        Spongebob Theme
                      </Text>
                      <Text color="#FFF" fontSize="md">
                        Who lives in a pineapple under the sea?
                      </Text>
                    </VStack>
                    <Pressable
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(225, 225, 225, 0.4)',
                        borderRadius: 10,
                        borderWidth: 2,
                        height: 38,
                        justifyContent: 'center',
                        width: 65,
                      }}
                    >
                      <Text color="#FFF" fontSize="lg" fontWeight="medium">
                        Apply
                      </Text>
                    </Pressable>
                  </HStack>
                </HStack>

                <HStack
                  space={4}
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <LinearGradient
                    colors={['#68ADFF', '#4F45FF']}
                    style={{
                      alignItems: 'center',
                      borderRadius: 9999,
                      height: 40,
                      justifyContent: 'center',
                      width: 40,
                    }}
                  >
                    <Image
                      source={require('../../assets/spiderman.png')}
                      style={{ height: 46, width: 46 }}
                    />
                  </LinearGradient>
                  <HStack
                    style={{
                      borderBottomColor: 'transparent',
                      borderBottomWidth: 1,
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
                        Spiderman Theme
                      </Text>
                      <Text color="#FFF" fontSize="md">
                        With great power comes great responsibility.
                      </Text>
                    </VStack>
                    <Pressable
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(225, 225, 225, 0.4)',
                        borderRadius: 10,
                        borderWidth: 2,
                        height: 38,
                        justifyContent: 'center',
                        width: 65,
                      }}
                    >
                      <Text color="#FFF" fontSize="lg" fontWeight="medium">
                        Apply
                      </Text>
                    </Pressable>
                  </HStack>
                </HStack>

                <HStack
                  space={4}
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <LinearGradient
                    colors={['#fff', '#fff']}
                    style={{
                      alignItems: 'center',
                      borderRadius: 9999,
                      height: 40,
                      justifyContent: 'center',
                      width: 40,
                    }}
                  >
                    <Image
                      source={require('../../assets/floral.png')}
                      style={{ height: 46, width: 46 }}
                    />
                  </LinearGradient>
                  <HStack
                    style={{
                      borderBottomColor: 'transparent',
                      borderBottomWidth: 1,
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
                        Floral Theme
                      </Text>
                      <Text color="#FFF" fontSize="md">
                        Every flower must grow through dirt.
                      </Text>
                    </VStack>
                    <Pressable
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(225, 225, 225, 0.4)',
                        borderRadius: 10,
                        borderWidth: 2,
                        height: 38,
                        justifyContent: 'center',
                        width: 65,
                      }}
                    >
                      <Text color="#FFF" fontSize="lg" fontWeight="medium">
                        Apply
                      </Text>
                    </Pressable>
                  </HStack>
                </HStack>

                <HStack
                  space={4}
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <LinearGradient
                    colors={['#fff', '#fff']}
                    style={{
                      alignItems: 'center',
                      borderRadius: 9999,
                      height: 40,
                      justifyContent: 'center',
                      width: 40,
                    }}
                  >
                    <Image
                      source={require('../../assets/mickey.png')}
                      style={{ height: 46, width: 46 }}
                    />
                  </LinearGradient>
                  <HStack
                    style={{
                      borderBottomColor: 'transparent',
                      borderBottomWidth: 1,
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
                        Mickey Mouse Theme
                      </Text>
                      <Text color="#FFF" fontSize="md">
                        All you need is a little bit of magic.
                      </Text>
                    </VStack>
                    <Pressable
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(225, 225, 225, 0.4)',
                        borderRadius: 10,
                        borderWidth: 2,
                        height: 38,
                        justifyContent: 'center',
                        width: 65,
                      }}
                    >
                      <Text color="#FFF" fontSize="lg" fontWeight="medium">
                        Apply
                      </Text>
                    </Pressable>
                  </HStack>
                </HStack>

                <HStack
                  space={4}
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <LinearGradient
                    colors={['#fff', '#fff']}
                    style={{
                      alignItems: 'center',
                      borderRadius: 9999,
                      height: 40,
                      justifyContent: 'center',
                      width: 40,
                    }}
                  >
                    <Image
                      source={require('../../assets/captain.png')}
                      style={{ height: 46, width: 46 }}
                    />
                  </LinearGradient>
                  <HStack
                    style={{
                      borderBottomColor: 'transparent',
                      borderBottomWidth: 1,
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
                        Captain America Theme
                      </Text>
                      <Text color="#FFF" fontSize="md">
                        I can do this all day.
                      </Text>
                    </VStack>
                    <Pressable
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(225, 225, 225, 0.4)',
                        borderRadius: 10,
                        borderWidth: 2,
                        height: 38,
                        justifyContent: 'center',
                        width: 65,
                      }}
                    >
                      <Text color="#FFF" fontSize="lg" fontWeight="medium">
                        Apply
                      </Text>
                    </Pressable>
                  </HStack>
                </HStack>

                <HStack
                  space={4}
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <LinearGradient
                    colors={['#fff', '#fff']}
                    style={{
                      alignItems: 'center',
                      borderRadius: 9999,
                      height: 40,
                      justifyContent: 'center',
                      width: 40,
                    }}
                  >
                    <Image
                      source={require('../../assets/ironman.png')}
                      style={{ height: 46, width: 46 }}
                    />
                  </LinearGradient>
                  <HStack
                    style={{
                      borderBottomColor: 'transparent',
                      borderBottomWidth: 1,
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
                        Ironman Theme
                      </Text>
                      <Text color="#FFF" fontSize="md">
                        I can do this all day.
                      </Text>
                    </VStack>
                    <Pressable
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(225, 225, 225, 0.4)',
                        borderRadius: 10,
                        borderWidth: 2,
                        height: 38,
                        justifyContent: 'center',
                        width: 65,
                      }}
                    >
                      <Text color="#FFF" fontSize="lg" fontWeight="medium">
                        Apply
                      </Text>
                    </Pressable>
                  </HStack>
                </HStack>
              </Divider>
            );
          }}
          style={{
            height: '100%',
          }}
          ListFooterComponent={<RNView />}
          ListFooterComponentStyle={{
            marginBottom: 70,
          }}
        />
      </Box>
    </View>
  );
}
