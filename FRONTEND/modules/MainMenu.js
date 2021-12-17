import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { Link } from "react-router-native";

import {color} from '../helpers/styles';
import Toast from '../assets/Toast'
import Door from '../assets/Door'
import User from '../assets/User';
import Room from '../assets/Room';
import { BackHandler } from 'react-native';

const MainMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titlewraper}>
                <Text style={styles.textHeader}>Menu główne</Text>
            </View>
            <View style={styles.Background}>
                <Link to='/toastSubMenu' style={styles.block}>
                    <View style={styles.block2}>
                        <Toast width="60%" height="60%"/>
                        <Text style={styles.textHeader}>Tosty</Text>
                    </View>
                </Link>
                <Link to='/adminUsers' style={styles.block}>
                    <View style={styles.block2}>
                        <User width="60%" height="60%"/>
                        <Text style={styles.textHeader}>Użytkownicy</Text>
                    </View>
                </Link>
                <Link to="/classroomManager" style={styles.block}>
                    <View style={styles.block2}>
                        <Room width="60%" height="60%"/>
                        <Text style={styles.textHeader}>Pokoje</Text>
                    </View>
                </Link>
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
        alignContent: "center",
        justifyContent: "center",
    },
    block: {
        width: "45%",
        height: "40%",
        marginTop: "2%",
        marginLeft: "1%",
        marginRight: "1%",
        backgroundColor: color.primaryColor,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    block2: {
        width: "100%",
        height: "100%",
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
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.highlightColor,
    },
    container: {
        flex: 1,
    }
});
