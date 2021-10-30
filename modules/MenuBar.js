import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const MenuBar = ({CurrentPageTitle}) => {
    return(
        <View style={styles.MenuBar}>
            <Button title="MENU"/>
            <Text>{CurrentPageTitle}</Text>
        </View>
    )
}

export default MenuBar;

const styles = StyleSheet.create({
    MenuBar: {
        flex: 0,
        backgroundColor: '#252323',
        height:53,

    },
});
