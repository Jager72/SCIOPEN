import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import ConfigureOrder from './modules/ConfigureOrder'
import MenuBar from './modules/MenuBar'
import Login from './modules/Login'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Login navigation={"DUPA"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1,
  },
});
