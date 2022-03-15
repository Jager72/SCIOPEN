import React from 'react';
import {BackHandler, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {Link} from "react-router-native";

import {connect} from 'react-redux';
import {color} from '../helpers/styles';
import Toast from '../assets/Toast'
import Door from '../assets/Door'
import User from '../assets/User';
import Room from '../assets/Room';
import Feather from 'react-native-vector-icons/Feather';
import * as groupActions from '../actions/group';

const MainMenu = props =>  {
    const deleteGroup = () => {
        return Alert.alert(
            "Uwaga!",
            "Czy na pewno chcesz usunąć grupę?",
            [
              // The "Yes" button
              {
                text: "Tak",
                onPress: () => {
                    props.setOwner(null);
                    props.setSize(null);
                },
              },
              // The "No" button
              // Does nothing but dismiss the dialog when tapped
              {
                text: "Nie",
              },
            ]
          );
    }

    const createGroup = () => {
        //to nie działa jak coś xd
        return Alert.prompt("Welcome", "Please enter your name", [
            {
                text:"Submit",
                onPress:(text)=>props.setOwner(text)
            },
            {
                text:"Cancel",
                onPress:()=>console.log('dupa')
            }
        ], "plain-text", "Name"
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titlewraper}>
                <View style={styles.Header_flex1}>
                   
                </View>
                <Text style={styles.textHeader}>Menu główne</Text>
                <View style={styles.Header_flex1}>
                    {props.groupSize == null ?
                        <TouchableOpacity
                        onPress={createGroup}
                        style={styles.button}
                        >
                            <Feather
                                name="users"
                                color="white"
                                size={35}
                            />
                        </TouchableOpacity>
                    :
                        <TouchableOpacity
                        onPress={deleteGroup}
                        style={styles.button2}
                        >
                            <Feather
                                name="users"
                                color="white"
                                size={35}
                            />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={styles.Background}>
                <Link to='/toastSubMenu' style={styles.block}>
                    <View style={styles.block2}>
                        <Toast width="60%" height="60%"/>
                        <Text style={styles.textHeader}>Tosty</Text>
                    </View>
                </Link>
                <Link to='/myProfile' style={styles.block}>
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
                <TouchableOpacity style={styles.block} onPress={() => BackHandler.exitApp()}>
                    <Door width="60%" height="60%"/>
                    <Text style={styles.textHeader}>Wyjście</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    groupOwner: state.group.groupOwner,
    groupSize: state.group.groupSize,
})

const mapActionsToProps = {
    setOwner: groupActions.setOwner,
    setSize: groupActions.setSize,
}

export default connect(mapStateToProps, mapActionsToProps)(MainMenu);

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: color.secondaryColor,
        alignContent: "center",
        justifyContent: "center",
    },
    Header_flex1: {
        flex: 1
    },
    Header_flex2: {
        flex: 3,
        flexDirection: "row",
    },
    button: {
        backgroundColor: color.secondaryColor,
        borderRadius: 10,
        marginLeft: 10,
        padding: 2,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "space-around",
    },
    button2: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginLeft: 10,
        padding: 2,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "space-around",
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
        flex: 3,
    },
    titlewraper: {
        height: 60,
        flexDirection: "row",
        backgroundColor: color.highlightColor,
        alignItems: "center",
        justifyContent: "space-around",
    },
    container: {
        flex: 1,
    },
});
