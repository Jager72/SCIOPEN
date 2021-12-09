import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import { Router, Scene } from 'react-native-router-flux'

import MainMenu from './modules/MainMenu';
import Login from './modules/Login'
import ConfigureOrder from "./modules/ConfigureOrder";
import OrderList from "./modules/OrderList";
import ClassroomManager from "./modules/ClassroomManager";
import ToastSubMenu from './modules/ConfigureOrder/ToastSubMenu';
import MyProfile from './modules/MyProfile'

const MainView = props => {
    if (!props.user.isLogged){
        return (
           <Login/>
        );
    }
    return (
        <View style={styles.container}>
            <Router>
                <Scene key={'root'}>
                    <Scene key={'mainMenu'} component={MainMenu} title={'Main Menu'} initial={true} hideNavBar={true}/>
                    <Scene key={'configureOrder'} component={ConfigureOrder} title={'Configure Order'} hideNavBar={true}/>
                    <Scene key={'orderList'} component={OrderList} title={'Order List'} hideNavBar={true}/>
                    <Scene key={'classroomManager'} component={ClassroomManager} title={'Classroom Manager'} hideNavBar={true}/>
                    <Scene key={'toastSubMenu'} component={ToastSubMenu} title={'Toast Sub Menu'} hideNavBar={true}/>
                    <Scene key={'myProfile'} component={MyProfile} title={'My Profile'} hideNavBar={true}/>
                </Scene>
            </Router>
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
