import React from 'react';
import {StyleSheet, Dimensions, Text, View, FlatList, TouchableOpacity, SectionList} from 'react-native';
import {color} from "../helpers/styles";
import { Actions } from 'react-native-router-flux';
import Feather from 'react-native-vector-icons/Feather';
import Cheese from "../assets/Cheese";
import Ham from "../assets/Ham";
import Ketchup from "../assets/Ketchup";
import Toast from "../assets/Toast";
import DATA from "./SampleData";

const images = {
  cheese: <Cheese width={25} height={25}/>,
  ham: <Ham width={25} height={25}/>,
  ketchup: <Ketchup width={25} height={25}/>,
  toast: <Toast width={25} height={25}/>
}

const addOrder = (order) => {
    if(UserOrders.length === 0){
        UserOrders.push(order);
    }
    console.log(UserOrders.length);
}

const UserOrders =[
    {
    id: '4',
    cheese: 3,
    ham: 2,
    ketchup: true,
    quantity: 2,
    state: 'preparing',
  }];

const renderItem = ({ item }) => (
    <View  style={item.state==='waiting' ?  styles.itemW : item.state==='preparing' ? styles.itemP : styles.itemD}>
        <View style={styles.itemMargin}>
            <View style={styles.itemLeft}>
                <Feather
                    name="hash"
                    color="#EBEBEB"
                    size={25}
            />
                <Text style={styles.itemText}>{item.id}</Text>
            </View>
        </View>
        <View style={styles.itemMargin}>
            <View style={styles.itemMiddle}>
                {images['cheese']}
                <Text style={styles.itemText}>{item.cheese}</Text>
            </View>
        </View>
        <View style={styles.itemMargin}>
            <View style={styles.itemMiddle}>
                {images['ham']}
                <Text style={styles.itemText}>{item.ham}</Text>
            </View>
        </View>
        <View style={styles.itemMargin}>
            <View style={styles.itemMiddle}>
                {images['ketchup']}
                {item.ketchup ? <Text style={styles.itemText}>✓</Text> : <Text style={styles.itemText}>✗</Text>}
            </View>
        </View>
        <View style={styles.itemMargin}>
            <View style={styles.itemMiddle}>
                {images['toast']}
                <Text style={styles.itemText}>{item.quantity}</Text>
            </View>
        </View>
        <View style={styles.itemMargin}>
            <View style={styles.itemRight}>
            {item.state === 'preparing' ?
                <TouchableOpacity
                    onPress={() => {/*Change state to 'done'*/}}
                    style={styles.button}
                    >
                    <Feather
                        name="arrow-down-circle"
                        color="#EBEBEB"
                        size={45}
                    />
                </TouchableOpacity>
            :null}
            {item.state === 'waiting' ?
                <TouchableOpacity
                    onPress={() => {/*Change state to 'preparing' and set cookId*/}}
                    style={styles.button}
                >
                <Feather
                    name="arrow-up-circle"
                    color="#EBEBEB"
                    size={45}
                />
                </TouchableOpacity>
            :null}
            {item.state === 'done' ?
                <TouchableOpacity
                    onPress={() => {/*Change state to 'delivered'*/}}
                    style={styles.button}
                >
                <Feather
                    name="arrow-right-circle"
                    color="#EBEBEB"
                    size={45}
                />
                </TouchableOpacity>
            :null}
            </View>
        </View>
    </View>
);

export default function OrderList(){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Aktualne Zamówienia</Text>
            </View>
            <View style={styles.main}>
                {UserOrders.length !== 0 ?
                <View style={styles.ordersInPreparation}>
                    <FlatList
                        style={styles.list}
                        data={UserOrders}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>:null}
                <View style={styles.listHolder}>
                    <FlatList
                        style={styles.list}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => {Actions.mainMenu()}}>
                    <View style={styles.row2}>
                        <View style={styles.row3}>
                            <Text style={styles.bottomText}>
                                <Feather
                                name="arrow-left"
                                color="#EBEBEB"
                                size={25}
                                />
                                Powrót
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

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
