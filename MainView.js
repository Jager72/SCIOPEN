import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Provider,connect} from 'react-redux';


import ConfigureOrder from './modules/ConfigureOrder'
import ClassroomManager from './modules/ClassroomManager'
import MyProfile from './modules/MyProfile'
import MenuBar from './modules/MenuBar'
import Login from './modules/Login'

const MainView = props => {
    if (!props.user.isLogged){
        return (
            <Login/>
        );
    }
    return (
        <View style={styles.container}>
            
            <MyProfile/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(MainView)
