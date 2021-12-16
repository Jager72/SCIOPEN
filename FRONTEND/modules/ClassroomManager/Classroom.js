import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import { color } from "../../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import * as roomActions from '../../actions/rooms';

const Classroom = props => {
  var item = props.item;
  console.log(props.visitedRooms.indexOf(item.roomNumber) > -1)

  const leaveRoom = (room) => {
    props.setCurrentRoom(null);
    props.addVisitedRoom(room.roomNumber);
    /*Change state to 'free'*/
    console.log(room)
    props.update(
      {
        roomNumber: room.roomNumber,
        name: room.name,
        description: room.description,
        available: true,
        startDate: room.startDate
      }
    )
    props.FetchAll()
  }
  
  
  const enterRoom = (room) => {
    props.setCurrentRoom(room.roomNumber);
    console.log(room)
    /*Change state to 'busy'*/
    props.update(
      {
        roomNumber: room.roomNumber,
        name: room.name,
        description: room.description,
        available: false,
        startDate: room.startDate
      }
    )
    props.FetchAll()
  }

  return (
    <View style={!item.available && item.roomNumber !== props.currentRoom && props.visitedRooms.indexOf(item.roomNumber) == -1 ?  styles.notAvailableClass 
    : !item.available && item.roomNumber !== props.currentRoom && props.visitedRooms.indexOf(item.roomNumber) > -1 ? styles.visitedNotAvailableClass
    : item.available && item.roomNumber !== props.currentRoom && props.visitedRooms.indexOf(item.roomNumber) > -1 ? styles.visitedClass
    : styles.class
    }>
      <Text style={styles.typeText}>{item.roomNumber}</Text>

      <View style={styles.Description}>
          <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={styles.buttonHolder}>
          {item.available ?
          <TouchableOpacity
          onPress={() => {props.currentRoom === null ? enterRoom(item) : Alert.alert('Błąd!', 'Masz już zajęty inny pokój!')}}
          style={styles.takeButton}
          >
            <Feather
                    name="log-in"
                    color="#EBEBEB"
                    size={45}
            />
          </TouchableOpacity> : 
          !item.available && item.roomNumber !== props.currentRoom ? 
          <View style={styles.notAvailable}>
            <Feather
                    name="x-square"
                    color="#EBEBEB"
                    size={45}
            />
          </View> : 
          <TouchableOpacity
          onPress={() => {leaveRoom(item)}}
          style={styles.releaseButton}
          >
            <Feather
                    name="log-out"
                    color="#EBEBEB"
                    size={45}
            />
          </TouchableOpacity>
          }
        </View>


     
    </View>
  );
};

const mapStateToProps = state => ({
  currentRoom: state.rooms.currentRoom,
  visitedRooms: state.rooms.visitedRooms,
})

const mapActionsToProps = {
  setCurrentRoom: roomActions.setCurrentRoom,
  addVisitedRoom: roomActions.addVisitedRoom,
  update: roomActions.Update,
  FetchAll: roomActions.FetchAll,

}

export default connect(mapStateToProps,mapActionsToProps)(Classroom);

const styles = StyleSheet.create({
  releaseButton:{
      backgroundColor: 'red',
      borderRadius: 10,
  },
  takeButton:{
      backgroundColor: color.highlightColor,
      borderRadius: 10,
  },

  class : {
    height: 90,
    flexDirection: "row",
    backgroundColor: color.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 25,
  },
  notAvailableClass : {
    height: 90,
    flexDirection: "row",
    backgroundColor: "#376382",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 25,
  },

  
  visitedClass : {
    height: 90,
    flexDirection: "row",
    backgroundColor: color.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 25,
    borderWidth:3,
    borderColor: color.highlightColor,
  },
  visitedNotAvailableClass : {
    height: 90,
    flexDirection: "row",
    backgroundColor: "#376382",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 25,
    borderWidth:3,
    borderColor: color.highlightColor,
  },

  typeText: {
    flex: 1.3,
    color:"white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  Description: {
    flex: 3,
    backgroundColor: "#064c7d",
    height: "90%",
    borderRadius: 5,
    color: 'white',
    justifyContent: 'center'
  },
  descriptionText: {
    color: 'white',
    textAlign: "center",
    fontSize: 15,

  },
  buttonHolder: {
      flex:1.3,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
  },
  notAvailable: {
    backgroundColor: "#bd6a17",
    borderRadius: 10,
  }

});
