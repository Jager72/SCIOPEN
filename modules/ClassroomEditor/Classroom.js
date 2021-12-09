import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput} from "react-native";
import { color } from "../../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import * as editActions from '../../actions/roomEditor';
import DATA from "../ClassroomManager/SampleDataRooms";

const Classroom = props => {
  var item = props.item;
  const editRoom = (number) => {
    if(props.currentRoom === null){
      props.setCurrentRoomEdit(number);
    } else {
      Alert.alert('Uwaga','Zakończ edycję poprzedniego pokoju!')
    }
  }
    const [data, setData] = React.useState({
        changedRoomNumber: null,
        changedRoomDescription: null,
    });
    const roomNumberChange = (val) => {
        setData({
            ...data,
            changedRoomNumber: val,
        });
        console.log(data.newRoomNumber)
    }
    const roomDescriptionChange = (val) => {
        setData({
            ...data,
            changedRoomDescription: val,
        });
    }
  
  const saveRoom = () => {
    if ( data.changedRoomNumber === null && data.changedRoomDescription === null ) {
      Alert.alert('Błąd!', 'Nie wprowadzono zmian ani numeru sali ani opisu sali!');
      return;
    }
    /* check if new roomNumber is unique and then update roomNumber and roomDescription in db instead of this:*/
    let obj = DATA.find(x => x.roomNumber == props.currentRoom);
    let index = DATA.indexOf(obj);
    if(data.changedRoomNumber !== null){
      DATA[index].roomNumber=data.changedRoomNumber;
    }
    if(data.changedRoomDescription !== null){
      DATA[index].description=data.changedRoomDescription;
    }
    ///
    roomNumberChange(null)
    roomDescriptionChange(null)
    props.setCurrentRoomEdit(null);
  }

  const cancelEditing = () => {
    roomNumberChange(null)
    roomDescriptionChange(null)
    props.setCurrentRoomEdit(null)
  }
  
  const deleteRoom = (number) => {
    /*delete room from db instead of this:*/
    let obj = DATA.find(x => x.roomNumber == number);
    let index = DATA.indexOf(obj);
    DATA.splice(index, 1);
    /////
  }

  return (
    <View style={styles.class}>
      {item.roomNumber !== props.currentRoom ?
        <Text style={styles.typeText}>{item.roomNumber}</Text>      
      :
        <TextInput
        autoCapitalize="none"
        keyboardType="numeric"
        style={styles.typeText}
        underlineColorAndroid="transparent"
        selectionColor={'white'}
        placeholder={item.roomNumber.toString()}
        placeholderTextColor="#D7D7D7"
        maxLength={3}
        onChangeText={(val) => roomNumberChange(val)}
        />
      }

      <View style={styles.Description}>
          {item.roomNumber !== props.currentRoom ?
          <Text style={styles.descriptionText}>{item.description}</Text>
          :
          <TextInput
          style={styles.descriptionText}
          underlineColorAndroid="transparent"
          selectionColor={'white'}
          placeholder={item.description}
          placeholderTextColor="#D7D7D7"
          multiline={true}
          onChangeText={(val) => roomDescriptionChange(val)}
      />
          }
      </View>
      {item.roomNumber !== props.currentRoom ?
      <View style={styles.buttonHolder}>
          <TouchableOpacity
          onPress={() => {editRoom(item.roomNumber)}}
          style={styles.editButton}
          >
            <Feather
                    name="edit-3"
                    color="#EBEBEB"
                    size={35}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {deleteRoom(item.roomNumber)}}
          style={styles.deleteButton}
          >
            <Feather
                    name="trash-2"
                    color="#EBEBEB"
                    size={35}
            />
          </TouchableOpacity>
        </View>
        :
        <View style={styles.buttonHolder}>
          <TouchableOpacity
          onPress={() => {saveRoom()}}
          style={styles.saveButton}
          >
            <Feather
                    name="check"
                    color="#EBEBEB"
                    size={35}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {cancelEditing()}}
          style={styles.deleteButton}
          >
            <Feather
                    name="x-square"
                    color="#EBEBEB"
                    size={35}
            />
          </TouchableOpacity>
        </View>
        }
    </View>
  );
};

const mapStateToProps = state => ({
  currentRoom: state.roomEditor.currentRoom,
  creating: state.roomEditor.creating
})

const mapActionsToProps = {
  setCurrentRoomEdit: editActions.setCurrentRoomEdit,
  setRoomCreatingStatus: editActions.setRoomCreatingStatus
}

export default connect(mapStateToProps,mapActionsToProps)(Classroom);

const styles = StyleSheet.create({
  editButton:{
      backgroundColor: 'orange',
      borderRadius: 10,
      margin:3,
      padding:2,
  },
  saveButton:{
      backgroundColor: color.highlightColor,
      borderRadius: 10,
      margin:3,
      padding:2,
  },
  deleteButton:{
      backgroundColor: 'red',
      borderRadius: 10,
      margin:3,
      padding:2,
  },

  class : {
    height: 100,
    flexDirection: "row",
    backgroundColor: color.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 25,
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
