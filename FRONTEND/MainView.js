import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import {Route, Routes} from "react-router-native";

import MainMenu from './modules/MainMenu';
import Login from './modules/Login'
import ConfigureOrder from "./modules/ConfigureOrder";
import OrderList from "./modules/OrderList";
import ClassroomManager from "./modules/ClassroomManager";
import ToastSubMenu from './modules/ConfigureOrder/ToastSubMenu';
import MyProfile from './modules/MyProfile';
import * as orderActions from './actions/order';
import * as roomActions from './actions/rooms';
import AdminUsers from './modules/AdminUsers';

const MainView = props => {

    useEffect(() => {
        props.FetchAllOrders();
        props.FetchAllRooms();
    }, []);

    if (!props.user.isLogged){
        return (
           <Login/>
        );
    }
    return (
        <View style={styles.container}>
            <Routes>
                <Route path="/" element={<MainMenu/>}/>
                <Route path="/configureOrder" element={<ConfigureOrder/>}/>
                <Route path="/orderList" element={<OrderList/>}/>
                <Route path="/classroomManager" element={<ClassroomManager/>}/>
                <Route path="/toastSubMenu" element={<ToastSubMenu/>}/>
                <Route path="/myProfile" element={<MyProfile/>}/>
                <Route path="/adminUsers" element={<AdminUsers/>}/>
            </Routes>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});

const mapStateToProps = state => ({
    user: state.user,
    orders: state.order,
    rooms: state.rooms.rooms,
})

const mapActionsToProps = {
    FetchAllOrders: orderActions.FetchAll,
    FetchAllRooms: roomActions.FetchAll
}

export default connect(mapStateToProps, mapActionsToProps)(MainView)
