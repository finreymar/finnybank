/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ScrollView } from 'native-base';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View as View1,
} from 'react-native';
import { Button } from '@rneui/themed';
import Header from '../components/Header';
import View from '../components/View';

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    borderRadius: 5,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 0,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 5,
  },
});

const postReq = () => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization':
      //   'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
    },
    body: JSON.stringify({
      // _id: '12323o2i5lk',
      account: '123344557',
      amount: 111,
      approve: 'N',
    }),
  };
  fetch('http://10.118.17.50:3000/api/approval/', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Record Added!', json.account);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default function Menu() {
  const [amount, setAmount] = useState('');

  return (
    <View>
      <Header>Main Menu</Header>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View1 style={styles.container}>
          {/* <ScrollView height="100%" /> */}
          <View1 style={styles.container}>
            <Text style={styles.inputext}>Request Money</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              maxLength={5}
              keyboardType="numeric"
              placeholderTextColor="rgba(255,255,255,0.8)"
              onChangeText={(newAmount) => setAmount(newAmount)}
              value={amount}
            />

            <Button
              title="Request"
              buttonStyle={{
                backgroundColor: 'rgba(85, 170, 230, 1)',
                borderRadius: 5,
              }}
              containerStyle={{
                height: 40,
                width: 250,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={postReq}
            />
          </View1>
        </View1>
      </TouchableWithoutFeedback>
    </View>
  );
}
