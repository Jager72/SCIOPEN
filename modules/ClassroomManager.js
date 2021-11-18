import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import AvailableClass from "./ClassroomManager/AvailableClass";
import NotAvailableClass from "./ClassroomManager/NotAvailableClass";
import SelectedClass from "./ClassroomManager/SelectedClass";
import {color} from "../helpers/styles";
import { AlignLeft, AlignRight } from 'react-native-feather';

export default function ClassroomManager(){
    return(
        <View style={styles.container}>

            <View style={styles.Header}>
                <Text style={styles.textHeader}>Sale</Text>
                <Button style={styles.resetButton} title="Resetuj"/>
            </View>

            <View style={styles.Separator1}>
                <Text style={styles.textSeparator}>Wybrana sala:</Text>
            </View>
            
            <SelectedClass classNumber={"301"} description={"Zarabianie kabli ethernet"}/>

            <ScrollView>
                <View style={styles.Separator2}>
                    <Text style={styles.textSeparator}>Wolne sale:</Text>
                </View>
                
                <AvailableClass classNumber={"101"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                <AvailableClass classNumber={"102"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                <AvailableClass classNumber={"105"} description={"Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis "}/>
                <AvailableClass classNumber={"201"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                <AvailableClass classNumber={"203"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                <AvailableClass classNumber={"204"} description={"Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis "}/>
                <AvailableClass classNumber={"303"} description={"Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis "}/>
                <AvailableClass classNumber={"304"} description={"Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis "}/>

                <View style={styles.Separator3}>
                    <Text style={styles.textSeparator}>Zajęte sale:</Text>
                </View>

                <NotAvailableClass classNumber={"103"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                <NotAvailableClass classNumber={"106"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                <NotAvailableClass classNumber={"205"} description={"Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis "}/>
                <NotAvailableClass classNumber={"202"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                <NotAvailableClass classNumber={"302"} description={"Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis "}/>
                <NotAvailableClass classNumber={"305"} description={"Coś tam Coś tam Coś tam Coś tam Coś tam "}/>
                       
            </ScrollView>
               
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        height: 60,
        flexDirection: "row",
        backgroundColor: color.highlightColor,
        alignItems: "center",
        justifyContent: "space-around",
    },
   
    textHeader: {
        flex: 3,
        textAlign: "left",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: "10%",
    },
    resetButton: {
        flex: 2,
        marginRight:"50%",
    },
    Separator1: {
        height: 30,
        backgroundColor: color.primaryColor,
        marginTop: 0,
        justifyContent: 'center'
        
    },
    Separator2: {
        height: 30,
        backgroundColor: "#247800",
        justifyContent: 'center'
        
    },
    Separator3: {
        height: 30,
        backgroundColor: "#804000",
        justifyContent: 'center'
        
    },
    textSeparator: {
        textAlign: "left",
        color: 'white',
        fontSize: 15,
        marginLeft: "10%",
        
    },
    container: {
        flex:1,
    }
});
