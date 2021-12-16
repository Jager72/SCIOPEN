import React , { useState } from 'react';
import {StyleSheet, Text, View,} from "react-native";
import { color } from "../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import { Link } from "react-router-native";

const Header = ({title, path}) =>{
    var title1=title;
    var path1=path;
    return(

        <View style={styles.Header}>
            <View style={styles.Header_flex1}>
                    
                <Link to={path1} style={styles.backButton}>
                    <View >
                        <Feather
                            name="arrow-left"
                            color="#EBEBEB"
                            size={35}
                        />
                    </View>
                </Link>
                </View>
            <View style={styles.Header_flex2}>
                <Text style={styles.textHeader}>{title1}</Text>
            </View>
            <View style={styles.Header_flex1}></View>
         </View>










    );
}
export default Header;


const styles = StyleSheet.create({
    Header: {
        height: 60,
        flexDirection: "row",
        backgroundColor: color.highlightColor,
        alignItems: "center",
        justifyContent: "space-around",
    },
    Header_flex1: {
        flex: 1
     },
     Header_flex2: {
         flex: 3,
         flexDirection: "row",
      },
      textHeader: {
        flex: 1,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },



    backButton:{
        backgroundColor: color.secondaryColor,
        borderRadius: 10,
        marginLeft: 10,
        padding:2,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "space-around",
    },

});
