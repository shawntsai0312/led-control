import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import ledIcon from './assets/images/ledIcon.png'
import { Switch, NativeBaseProvider } from 'native-base';
import { changeState } from './axios'


export default function App() {

  const [on, setOn] = useState(false);

  const handleLedOn = async (e) => {
    const response = await changeState(e);
    if(response==='receive') setOn(e)
    
  }

  useEffect(() => {
    console.log(on)
  }, [on])

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Image source={ledIcon} style={styles.image} />
        <Switch size='lg' value={on} onValueChange={handleLedOn} />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
  }
});
