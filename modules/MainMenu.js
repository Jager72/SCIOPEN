import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { color } from '../helpers/styles';
import Toast from '../assets/Toast'
import Door from '../assets/Door'
import User from '../assets/User';
import Room from '../assets/Room';
const MainMenu = ({CurrentPageTitle}) => {
    return(
        <View style={styles.container}>
                <View style={styles.titlewraper}>
                <Text style={styles.textHeader}>Menu główne</Text>
                </View>
            <View style={styles.Background}>
                <View style={styles.block}><Toast width="60%" height="60%"></Toast><Text style={styles.textHeader}>Tosty</Text></View>
                <View style={styles.block}><User width="60%" height="60%"></User><Text style={styles.textHeader}>Profil</Text></View>
                <View style={styles.block}><Room width="60%" height="60%"></Room><Text style={styles.textHeader}>Pokoje</Text></View>
                <View style={styles.block}><Door width="60%" height="60%" ></Door><Text style={styles.textHeader}>Wyjście</Text></View>
            </View>
        </View>
    )
}

export default MainMenu;

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: color.secondaryColor ,
        alignContent: "space-around",
    },
    block:{
        width: "45%",
        height: "40%",
        marginTop:"2%",
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
      titlewraper:{
        width: "100%",
        height: "10%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.highlightColor,
      },
      container:{
        flex: 1,
      }
});
