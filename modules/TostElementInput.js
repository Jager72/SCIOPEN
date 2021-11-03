import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

const TostElementInput = ({itemType}) => {
    return(
        <View style={styles.TostElementInput}>
            <Image style={styles.tinyIcon}  source={require('../assets/icon.png')}/>
            <Text style={styles.typeText}>{itemType}</Text>
            <View  style={styles.buttonWrapper}>
                <Button color='#FF2222' title="-"/>
            </View>
            <Text style={styles.amountText}>12</Text>
            <View  style={styles.buttonWrapper}>
                <Button color='#22FF22' title="+"/>
            </View>
        </View>
    )
}

export default TostElementInput;

const styles = StyleSheet.create({
    TostElementInput: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#666666',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    tinyIcon:{
        width: 50,
        height: 50,
    },
    typeText:{
        flex:1,
        textAlign:'center'

    },
    buttonWrapper:{
        flex:1,
        
    },
    amountText:{
        flex:1,
        textAlign:'center'
    }
});
