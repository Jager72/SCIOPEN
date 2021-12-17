import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View, FlatList, ScrollView, TouchableOpacity, SectionList} from 'react-native';
import {color} from "../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import Cheese from "../assets/Cheese";
import Ham from "../assets/Ham";
import Ketchup from "../assets/Ketchup";
import Toast from "../assets/Toast";
import DATA from "./SampleData";
import OrderListItem from './OrderList/OrderListItem';
import * as orderActions from '../actions/order';
import {connect} from 'react-redux';
import * as orderListActions from '../actions/orderList';
import Header from "./Header";

const images = {
  cheese: <Cheese width={25} height={25}/>,
  ham: <Ham width={25} height={25}/>,
  ketchup: <Ketchup width={25} height={25}/>,
  toast: <Toast width={25} height={25}/>
}

  const OrderList = props =>{

    useEffect(() => {
        props.setCurrentOrder(4)
        console.log('aaa')
        console.log(props.currentOrder)
        console.log('aaa')
        setInterval(props.FetchAll, 1000);
    }, []);

    return(
        <View style={styles.container}>
            
            <Header title={"Zamówienia"} path={'/toastSubMenu'}/>
            <View style={styles.main}>
                {props.prepList !== null ?
                <View style={styles.ordersInPreparation}>
                    {props.prepList.map((item) => {
                                return (
                                        <OrderListItem item={item} key={item.orderId}/>
                                )
                        })}
                </View>:null}
                <View style={styles.listHolder}>
                    <ScrollView>
                    {
                        props.list.map((item) => {
                            if(item.state != 'preparing' && item.state!='delivered'){
                                return (
                                        <OrderListItem item={item} key={item.orderId}/>
                                )
                            }
                        })
                    }
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    list: state.order.list,
    currentOrder: state.orderList.currentOrder,
    prepList: state.orderList.prepList

})

const mapActionsToProps = {
    FetchAll: orderActions.FetchAll,
    setCurrentOrder: orderListActions.setCurrentOrder
}

export default connect(mapStateToProps, mapActionsToProps)(OrderList)

const styles = StyleSheet.create({
    button:{
        backgroundColor: color.highlightColor,
        borderRadius: 100,
    },
    ordersInPreparation: {
        flex:0,
        width:'100%',
        borderBottomColor: color.highlightColor,
        borderBottomWidth: 5,
        marginBottom: 5,
        paddingTop:5,
        paddingBottom:5,
    },
    listHolder: {
        flex:1,
        height:'100%',
        width:'100%',
    },
    container: {
        flex:1,
        alignItems: 'center',
    },
    top: {
        flex:0.8,
        backgroundColor: color.highlightColor,
        height:'100%',
        width:'100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        color: color.brightColor,
        fontWeight: 'bold',
        fontSize: 35,
    },
    main: {
        flex:6.2,
        height:'100%',
        width:'100%',
        alignItems: 'center',
    },
    list: {
        width:'100%',
    },
    itemW: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: color.secondaryColor,
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        height:100,
        borderRadius:20,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth:3,
        borderColor: 'red',
    },
    itemP: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: color.secondaryColor,
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        height:100,
        borderRadius:20,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth:3,
        borderColor: 'orange',
    },
    itemD: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: color.secondaryColor,
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        height:100,
        borderRadius:20,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth:3,
        borderColor: 'green',
    },
    itemLeft:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderRightColor: color.brightColor,
        borderRightWidth: 1,
        flexDirection: 'column',
    },
    itemMiddle:{
        flex:1,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        borderRightColor: color.brightColor,
        borderRightWidth: 1,
        borderLeftColor: color.brightColor,
        borderLeftWidth: 1,
        flexDirection: 'column',
    },
    itemRight:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderLeftColor: color.brightColor,
        borderLeftWidth: 1,
        flexDirection: 'column',
    },
    itemText:{
        color: color.brightColor,
        fontWeight: 'bold',
        fontSize: 35,
    },
    itemMargin:{
        flex:1,
        marginBottom:10,
        marginTop: 10,
    },
    bottom: {
        flex:1,
        backgroundColor: color.primaryColor,
        alignItems: 'center',
        height:'100%',
        width:'100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop:5,
    },
    row2: {
        marginTop: 20,
        width: '80%',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: color.highlightColor
    },
    row3: {
        flexDirection: 'row',
        paddingLeft:30,
        paddingRight:30,
    },
    bottomText:{
        color: color.brightColor,
        fontWeight: 'bold',
        fontSize: 25,
    },
});
