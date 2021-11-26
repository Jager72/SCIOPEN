import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainView from './MainView'
import { color } from './helpers/styles';
import {Provider} from "react-redux";
import {store} from "./actions/store";


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
    backgroundColor: color.brightColor
  }
});
