import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import {color} from '../../helpers/styles';
import Toast from '../../assets/Toast'
import List from '../../assets/List';
import Header from "../Header";

const ToastSubMenu = () => {
    return (
        <View style={styles.container}>
            <Header title={"Tosty"} path={'/'}/>
            <View style={styles.Background}>
                <Link to="/configureOrder" style={styles.block}>
                    <View style={styles.block2}>
                        <Toast width="60%" height="60%"/>
                        <Text style={styles.textHeader}>Zamów!</Text>
                    </View>
                </Link>
                <Link to="/orderList" style={styles.block}>
                    <View style={styles.block2}>
                        <List width="60%" height="60%"/>
                        <Text style={styles.textHeader}>Zamówienia</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user
});


export default connect(mapStateToProps)(ToastSubMenu);

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
    block2: {
        width: "100%",
        height: "100%",
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
