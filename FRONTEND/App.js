import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainView from './MainView'
import {color} from './helpers/styles';
import {Provider} from "react-redux";
import {store} from "./actions/store";
import {NativeRouter} from "react-router-native";

export default function App() {
    return (
        <NativeRouter>
            <Provider store={store}>
                <SafeAreaView style={styles.container}>
                    <StatusBar style="auto"/>
                    <MainView/>
                </SafeAreaView>
            </Provider>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: color.brightColor
    }
});
