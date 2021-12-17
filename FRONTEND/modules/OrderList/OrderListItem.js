import React from 'react';
import {StyleSheet, Dimensions, Text, View, FlatList, TouchableOpacity, SectionList, Alert} from 'react-native';
import { color } from '../../helpers/styles';
import Feather from 'react-native-vector-icons/Feather';
import Cheese from "../../assets/Cheese";
import Ham from "../../assets/Ham";
import Ketchup from "../../assets/Ketchup";
import Toast from "../../assets/Toast";
import * as orderActions from '../../actions/order';
import {connect} from 'react-redux';
import * as orderListActions from '../../actions/orderList';

const images = {
  cheese: <Cheese width={25} height={25}/>,
  ham: <Ham width={25} height={25}/>,
  ketchup: <Ketchup width={25} height={25}/>,
  toast: <Toast width={25} height={25}/>
}

const OrderListItem = props => {
    var item = props.item;

    const addOrder = (order) => {
        if(props.currentOrder == null){
            props.setCurrentOrder(order.orderId);
            console.log(props.currentOrder)
            props.update(
                {
                orderId: order.orderId,
                userId: order.userId,
                date: order.date,
                destinationId: order.destinationId,
                state: "preparing",
                cheese: order.cheese,
                ham: order.cheese,
                butter: order.butter,
                ketchup: order.ketchup,
                quantity: order.quantity
                }
            )
            var prep = []
            props.fetchAll()
            props.list.forEach(element => {
                if(element.state == 'preparing' && element.orderId==props.currentOrder){
                    prep.push(element)
                }
            });
            props.setPrepList(prep)
        } else{
            Alert.alert('Uwaga','Musisz najpierw ukończyć poprzednie zamówienie!')
        }
    }

    const finishOrder = (order) => {
            props.setCurrentOrder(null);
            props.update(
                {
                orderId: order.orderId,
                userId: order.userId,
                date: order.date,
                destinationId: order.destinationId,
                state: "done",
                cheese: order.cheese,
                ham: order.cheese,
                butter: order.butter,
                ketchup: order.ketchup,
                quantity: order.quantity
                }
            )
            props.fetchAll()
            props.setPrepList(null)
    }

    const deliverOrder = (order) => {
        props.update(
            {
            orderId: order.orderId,
            userId: order.userId,
            date: order.date,
            destinationId: order.destinationId,
            state: "delivered",
            cheese: order.cheese,
            ham: order.cheese,
            butter: order.butter,
            ketchup: order.ketchup,
            quantity: order.quantity
            }
        )
        props.fetchAll()
}

    return(
    <View  style={item.state==='waiting' ?  styles.itemW : item.state==='preparing' ? styles.itemP : styles.itemD}>
        <View style={styles.itemMargin}>
            <View style={styles.itemLeft}>
                <Feather
                    name="hash"
                    color="#EBEBEB"
                    size={25}
            />
                <Text style={styles.itemText}>{item.orderId}</Text>
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
                    onPress={() => {finishOrder(item)}}
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
                    onPress={() => {addOrder(item)}}
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
                    onPress={() => {deliverOrder(item)}}
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
    )
};

const mapStateToProps = state => ({
    list: state.order.list,
    currentOrder: state.orderList.currentOrder,
    prepList: state.orderList.prepList

})

const mapActionsToProps = {
    fetchAll: orderActions.FetchAll,
    update: orderActions.Update,
    setCurrentOrder: orderListActions.setCurrentOrder,
    setPrepList: orderListActions.setPrepList
}

export default connect(mapStateToProps, mapActionsToProps)(OrderListItem)

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
