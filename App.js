import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux' // set up redux store
import { Provider } from 'react-redux'

import AppNavigator from './src/navigation/AppNavigator'
import mealsReducer from './src/store/reducer/meals'

// using native optimize screen component provided by android and ios
enableScreens();


// if there is more than one reducer then combineReducers to the rescur
const rootReducer = combineReducers({
  meals: mealsReducer
})


// create store here which takes a reducer in
const store =createStore(rootReducer)

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
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
