import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { color } from '../helpers/styles';
const MenuBar = ({CurrentPageTitle}) => {
    return(
        <View style={styles.MenuBar}>
            <Button color={color.highlightColor} title="MENU"/>
            <Text>{CurrentPageTitle}</Text>
        </View>
    )
}

export default MenuBar;

const styles = StyleSheet.create({
    MenuBar: {
        flex: 0,
        backgroundColor: color.darkColor ,
        height:53,

    },
});
