import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';
import MenuBar from './modules/MenuBar'
import TostElementInput from './modules/ConfigureOrder/TostElementInput'
import TostElementBool from './modules/ConfigureOrder/TostElementBool'
import MainView from './MainView'
import OrderList from './modules/OrderList'
import { color } from './helpers/styles';
import {Provider} from "react-redux";
import {store} from "./actions/store";

export default function App() {
  return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <OrderList/>
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
