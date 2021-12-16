import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Classroom from "./ClassroomManager/Classroom";
import {color} from "../helpers/styles";
import DATA from './ClassroomManager/SampleDataRooms';
import {connect} from 'react-redux';
import * as roomActions from '../actions/rooms';
import Header from "./Header";

const ClassroomManager = props => {
    return(
        <View style={styles.container}>
            <Header title={"Sale"} path={'/'}/>
            {props.currentRoom !== null ?
                <View>
                    <View style={styles.Separator1}>
                        <Text style={styles.textSeparator}>Wybrana sala:</Text>
                    </View>
                    {
                        DATA.map((item) => {
                            if(item.roomNumber === props.currentRoom){
                            return (
                            <Classroom item={item} key={item.roomNumber}/>
                            );
                            }
                        })
                    }</View> : null
            }
            <ScrollView>
                <View style={styles.Separator2}>
                    <Text style={styles.textSeparator}>Wolne sale:</Text>
                </View>
                {
                    DATA.map((item) => {
                        if(item.state==='free' && item.roomNumber !== props.currentRoom){
                        return (
                        <Classroom item={item} key={item.roomNumber}/>
                        )}
                    })
                }
                <View style={styles.Separator3}>
                    <Text style={styles.textSeparator}>Zajęte sale:</Text>
                </View>
                {
                    DATA.map((item) => {
                        if(item.state==='busy' && item.roomNumber !== props.currentRoom){
                        return (
                        <Classroom item={item} key={item.roomNumber}/>
                        )}
                    })
                }
            </ScrollView>
        </View>
    );
}


const mapStateToProps = state => ({
    currentRoom: state.rooms.currentRoom,
    visitedRooms: state.rooms.visitedRooms,
  })

  const mapActionsToProps = {
    setCurrentRoom: roomActions.setCurrentRoom,
    addVisitedRoom: roomActions.addVisitedRoom,
  }

  export default connect(mapStateToProps,mapActionsToProps)(ClassroomManager);

const styles = StyleSheet.create({

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
