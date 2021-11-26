import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {color} from '../../helpers/styles';
import Toast from '../../assets/Toast'
import List from '../../assets/List';
import { Actions } from 'react-native-router-flux';

const ToastSubMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titlewraper}>
                <Text style={styles.textHeader}>Tosty</Text>
            </View>
            <View style={styles.Background}>
                <TouchableOpacity style={styles.block} onPress={()=>Actions.configureOrder()}>
                    <Toast width="60%" height="60%"/>
                    <Text style={styles.textHeader}>Zamów!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>Actions.orderList()}>
                    <List width="60%" height="60%"/>
                    <Text style={styles.textHeader}>Zamówienia</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ToastSubMenu;

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: color.secondaryColor,
        alignContent: "space-around",
    },
    block: {
        width: "65%",
        height: "44%",
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
