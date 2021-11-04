import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';


import ConfigureOrder from './modules/ConfigureOrder'
import MenuBar from './modules/MenuBar'
import Login from './modules/Login'
import {store} from './actions/store'
import MainView from "./MainView";

export default function App() {
  return (
      <Provider store={store}>
          <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />
              <MainView/>
          </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1,
  },
});
