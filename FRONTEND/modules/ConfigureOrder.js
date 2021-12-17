import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import TostElementInput from "./ConfigureOrder/TostElementInput";
import TostElementBool from "./ConfigureOrder/TostElementBool";
import {color} from "../helpers/styles";
import Header from "./Header";

export default function ConfigureOrder() {
    return (
        <View style={styles.container}>
            <Header title={"Edycja"} path={'/toastSubMenu'}/>
            <TostElementInput itemType={"Ser"} eImage={"cheese"}/>
            <TostElementInput itemType={"Szynka"} eImage={"ham"}/>
            <TostElementBool itemType={"Ketchup"} eImage={"ketchup"}/>
            <TostElementInput itemType={"Ilość"} eImage={"amount"}/>
            <View style={styles.TostElementInput}>
                <Button color={color.highlightColor} title="Zamów!"/>
            </View>
        </View>
    );
}

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
