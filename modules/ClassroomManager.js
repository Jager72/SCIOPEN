import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Classroom from "./ClassroomManager/Classroom";
import {color} from "../helpers/styles";
import DATA1 from "./ClassroomManager/SampleDataAvailableRooms";
import DATA2 from "./ClassroomManager/SampleDataNotAvailableRooms";
import DATA3 from "./ClassroomManager/SampleDataUsersRoom";

export default function ClassroomManager(){
    return(

        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.textHeader}>Sale</Text>
            </View>
            {DATA3.length != 0 ?
                <View>
                    <View style={styles.Separator1}>
                        <Text style={styles.textSeparator}>Wybrana sala:</Text>
                    </View>
                    {
                        DATA3.map((item) => {
                            return (
                            <Classroom item={item} key={4} userID={5}/*5 is example*/></Classroom>
                            );
                        })
                    }</View> : null
            }
            <ScrollView>
                <View style={styles.Separator2}>
                    <Text style={styles.textSeparator}>Wolne sale:</Text>
                </View>
                {
                    DATA1.map((item) => {
                        return (
                        <Classroom item={item} key={item.id}></Classroom>
                        );
                    })
                }

                <View style={styles.Separator3}>
                    <Text style={styles.textSeparator}>Zajęte sale:</Text>
                </View>
                {
                    DATA2.map((item) => {
                        return (
                        <Classroom item={item} key={item.id}></Classroom>
                        );
                    })
                }
            
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
