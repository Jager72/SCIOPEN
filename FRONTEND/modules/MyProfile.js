import React from 'react';
import {Image,  ScrollView, StyleSheet, Text, View} from 'react-native';
import {color} from "../helpers/styles";
import Statistics from "./MyProfile/Statistics";
import Header from "./Header";

var nick = "ZongXina";
var role = "Kucharz";
var id = 2137;

import photo from "../assets/JohnXina.jpg";

export default function MyProfile(){
    return(
        <View style={styles.container}>

        <Header title={"Mój Profil"} path={'/'}/>

            <View style={styles.Profile} >

                <View style={styles.PhotoView}>
                    <Image
                        source={photo}
                        style={styles.Photo}
                    />
                </View>
                <View style={styles.Info}>
                    <Text style={styles.Text1}>{nick}</Text>
                    <Text style={styles.Text2}> #{id}</Text>
                </View>
                <View style={styles.Info}>
                    <Text style={styles.Text2}>Rola: </Text>
                    <Text style={styles.Text1}>{role}</Text>
                </View>

            </View>
            

        </View>
    );
}

/*
    <View style={styles.Stats} >

                <View style={styles.StatsHeader}>
                    <Text style={styles.StatsHeaderText}>Twoje Statystyki:</Text>
                </View>
                
                <ScrollView>
                    <Statistics Name={"Zrealizowane zamówienia"} Value={24}/>
                    <Statistics Name={"Upieczone tosty"} Value={32}/>
                    <Statistics Name={"Ilość odwiedzonych sal"} Value={40}/>
                    <Statistics Name={"Oprowadzeni goście"} Value={55}/>
                    <Statistics Name={"Cośtam"} Value={4445}/>
                    <Statistics Name={"Cośtam"} Value={43}/>
                    <Statistics Name={"Cośtam"} Value={34}/>
                    <Statistics Name={"CośtamCośtamCośtamCośtamCośCośtamCośtamCośtam"} Value={4445444}/>
                    <Statistics Name={"Cośtam"} Value={343}/>
                    <Statistics Name={"Cośtam"} Value={44}/>
                    <Statistics Name={"Cośtam"} Value={11}/>

                 </ScrollView>

            </View>
*/

const styles = StyleSheet.create({
   
    Profile: {
        flex: 1,
    },
    PhotoView:
    {
        width: '100%',
        height: 175,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: '8%',
        marginBottom: '5%',

    },
    Photo: {
        width: 175,
        height: 175,
        borderRadius: 30,
        borderWidth: 8,
        borderColor: color.primaryColor,
    },
    Info:
    {
        width: '100%',
        minHeight: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    Text1: {
        textAlign: "center",
        color: color.primaryColor,
        fontWeight: 'bold',
        fontSize: 30,
    },
    Text2: {
        textAlign: "center",
        color: color.secondaryColor,
        fontWeight: 'bold',
        fontSize: 30,
    },
    Stats: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: color.secondaryColor,

    },
    StatsHeader: {
        marginTop: '3%',
        marginBottom: '2%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    StatsHeaderText: {
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    },
    container: {
        flex:1,
    }
});
