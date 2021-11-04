import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MenuBar from './modules/MenuBar'
import TostElementInput from './modules/TostElementInput'
import TostElementBool from './modules/TostElementBool'
import { color } from './helpers/styles';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MenuBar CurrentPageTitle={"TOSTY"}/>
      <TostElementInput itemType={"Ser"} eImage={"cheese"}/>
      <TostElementInput itemType={"Szynka"} eImage={"ham"}/>
      <TostElementBool itemType={"Ketchup"} eImage={"ketchup"}/>
      <TostElementInput itemType={"Ilość"} eImage={"amount"}/>
      <TostElementInput itemType={"Seks"} eImage={"amount"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1,
    backgroundColor: color.brightColor
  },
});
