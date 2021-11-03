import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MenuBar from './modules/MenuBar'
import TostElementInput from './modules/TostElementInput'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MenuBar CurrentPageTitle={"TOSTY"}/>
      <TostElementInput itemType={"SER"}/>
      <TostElementInput itemType={"SZYNKA"}/>
      <TostElementInput itemType={"KETCHUP"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1,
  },
});
