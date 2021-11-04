import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';
import MenuBar from './modules/MenuBar'
import TostElementInput from './modules/TostElementInput'
import TostElementBool from './modules/TostElementBool'
import { color } from './helpers/styles';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  />
      <MenuBar CurrentPageTitle={"TOSTY"}/>
      <TostElementInput itemType={"Ser"} eImage={"cheese"}/>
      <TostElementInput itemType={"Szynka"} eImage={"ham"}/>
      <TostElementBool itemType={"Ketchup"} eImage={"ketchup"}/>
      <TostElementInput itemType={"Ilość"} eImage={"amount"}/>
      <View style={styles.TostElementInput}><Button color={color.highlightColor}title="Zamów!"/></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1,
    backgroundColor: color.brightColor
  },
  TostElementInput: {
    flex: 0.4,
    flexDirection: "row",
    backgroundColor: color.secondaryColor,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    padding: 10,
    borderRadius: 25,
  },
});
