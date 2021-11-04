import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';
import MenuBar from './modules/MenuBar'
import TostElementInput from './modules/ConfigureOrder/TostElementInput'
import TostElementBool from './modules/ConfigureOrder/TostElementBool'
import MainView from './MainView'
import { color } from './helpers/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MainView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1,
    backgroundColor: color.brightColor
  }
});
