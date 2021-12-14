import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {color} from '../helpers/styles';
import Toast from '../assets/Toast'
import Door from '../assets/Door'
import User from '../assets/User';
import Room from '../assets/Room';
import { Actions } from 'react-native-router-flux';
import { BackHandler } from 'react-native';

const MainMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titlewraper}>
                <Text style={styles.textHeader}>Menu główne</Text>
            </View>
            <View style={styles.Background}>
                <TouchableOpacity style={styles.block} onPress={()=>Actions.toastSubMenu()}>
                    <Toast width="60%" height="60%"/>
                    <Text style={styles.textHeader}>Tosty</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>Actions.adminUsers()}>
                    <Text style={styles.textHeader}>AdminUsers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>Actions.classroomManager()}>
                    <Room width="60%" height="60%"/>
                    <Text style={styles.textHeader}>Pokoje</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>BackHandler.exitApp()}>
                    <Door width="60%" height="60%"/>
                    <Text style={styles.textHeader}>Wyjście</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainMenu;

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: color.secondaryColor,
        alignContent: "space-around",
    },
    block: {
        width: "45%",
        height: "40%",
        marginTop: "2%",
        backgroundColor: color.primaryColor,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
    },
    titlewraper: {
        width: "100%",
        height: "10%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.highlightColor,
    },
    container: {
        flex: 1,
    }
});
