import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import ConfigureOrder from './modules/ConfigureOrder'
import MenuBar from './modules/MenuBar'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MenuBar CurrentPageTitle={"TOSTY"}/>
      <ConfigureOrder />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
  },
});
