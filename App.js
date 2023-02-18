import React, { useState } from 'react';
import {  StyleSheet, View } from 'react-native';
import Top from './Components/Top';
import { NativeBaseProvider } from 'native-base';
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from './Navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from './Redux/store';




const App = () => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  

  
  return (
    <Provider store={store}>
    <NavigationContainer >
    <NativeBaseProvider initialWindowMetrics={inset}>
      <Top></Top>
      <MainNavigator  />
   </NativeBaseProvider>
    </NavigationContainer>
    </Provider>
  );
}

export default App;