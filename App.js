import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const getFonts = () => {
  return Font.loadAsync({
    'open-sans-reg': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  // Managing state for loading fonts which initially is false
  // because the font has not been loaded
  const [fontLoaded, setFontLoaded] = useState(false)

  // checking if the font has not be loaded
  // and make sure the splash screen is open until the fonts are loaded
  if (!fontLoaded) {
    return (
            <AppLoading 
              startAsync={getFonts} 
              onFinish={() => setFontLoaded(true)}
            />
      )
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
