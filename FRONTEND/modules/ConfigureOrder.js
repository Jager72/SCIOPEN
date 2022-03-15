import React,{useState} from 'react';
import { connect } from 'react-redux';
import {Button, StyleSheet, View} from 'react-native';
import TostElementInput from "./ConfigureOrder/TostElementInput";
import TostElementBool from "./ConfigureOrder/TostElementBool";
import {color} from "../helpers/styles";
import Header from "./Header";
import * as OrderActions from "../actions/order";

const ConfigureOrder = props => {
    const [cheese, setCheese] = useState(1);
    const [ham, setHam] = useState(0);
    const [ketchup, setKetchup] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const orders = props.orders.list.sort((a, b) => a.orderId - b.orderId);
    const handleCreate = () => {
        const order = {
            orderId: orders.length>0?orders[orders.length - 1].orderId+1:0,
            userId:props.user.userId,
            date:new Date().toLocaleTimeString(),
            destinationId:0,
            state:"waiting",
            cheese: cheese,
            ham: ham,
            butter:false,
            ketchup: ketchup,
            quantity: quantity
        }
        props.addOrder(order);
        alert("Order placed successfully");
    };
    return (
        <View style={styles.container}>
            <Header title={"Edycja"} path={'/toastSubMenu'}/>
            <TostElementInput itemType={"Ser"} eImage={"cheese"} data={cheese} dataSetter={setCheese}/>
            <TostElementInput itemType={"Szynka"} eImage={"ham"} data={ham} dataSetter={setHam}/>
            <TostElementBool itemType={"Ketchup"} eImage={"ketchup"} data={ketchup} dataSetter={setKetchup}/>
            <TostElementInput itemType={"Ilość"} eImage={"amount"} data={quantity} dataSetter={setQuantity}/>
            <View style={styles.TostElementInput}>
                <Button onPress={()=>handleCreate()} color={color.highlightColor} title="Zamów!"/>
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    orders: state.order,
    user: state.user.user
})
const mapActionsToProps = {
    addOrder: OrderActions.Create
}

export default connect(mapStateToProps, mapActionsToProps)(ConfigureOrder);

const styles = StyleSheet.create({
    TostElementInput: {
        flex: 0.4,
        flexDirection: "row",
        backgroundColor: color.secondaryColor,
        alignItems: "center",
        justifyContent: "space-around",
        margin: 10,
        padding: 10,
        borderRadius: 25,
    },
    container: {
        flex: 1,
    }
});
