import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';
import MenuBar from './modules/MenuBar'
import TostElementInput from './modules/ConfigureOrder/TostElementInput'
import TostElementBool from './modules/ConfigureOrder/TostElementBool'
import ConfigureOrder from "./modules/ConfigureOrder";

const MainView = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <MenuBar CurrentPageTitle={"TOSTY"}/>
            <ConfigureOrder/>
        </View>
    );
}
export default MainView

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});
