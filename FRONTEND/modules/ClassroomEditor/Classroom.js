import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput} from "react-native";
import { color } from "../../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import * as editActions from '../../actions/roomEditor';

const Classroom = props => {
  var item = props.item;
  const [data, setData] = React.useState({
    changedRoomNumber: null,
    changedRoomDescription: null,
    currentRoom: null,
});
  const editRoom = (number) => {
    if(data.currentRoom === null){
      setCurrentRoom(number)
    } else {
      Alert.alert('Uwaga','Zakończ edycję poprzedniego pokoju!')
    }
  }
    const setCurrentRoom = (val) => {
        setData({
            ...data,
            currentRoom: val,
        });
    }
    const roomNumberChange = (val) => {
        setData({
            ...data,
            changedRoomNumber: val,
        });
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
    let obj = props.roomArr.find(x => x.roomNumber == data.currentRoom);
    let index = props.roomArr.indexOf(obj);
    if(data.changedRoomNumber !== null){
      props.roomArr[index].roomNumber=data.changedRoomNumber;
    }
    if(data.changedRoomDescription !== null){
      props.roomArr[index].description=data.changedRoomDescription;
    }
    ///
    roomNumberChange(null)
    roomDescriptionChange(null)
    //props.setCurrentRoomEdit(null);
    setCurrentRoom(null)
  }

  const cancelEditing = () => {
    roomNumberChange(null)
    roomDescriptionChange(null)
    //props.setCurrentRoomEdit(null)
    setCurrentRoom(null)
  }
  
  const delRoom = (number) => {
    /*delete room from db instead of this:*/
    //let obj = props.roomArr.find(x => x.roomNumber == number);
    //let index = props.roomArr.indexOf(obj);
    //console.log(index)
    //DATA.splice(index, 1);
    props.deleteRoom(number);
    /////
  }

  return (
    <View style={styles.class}>
      {item.roomNumber !== data.currentRoom ?
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
          {item.roomNumber !== data.currentRoom ?
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
      {item.roomNumber !== data.currentRoom ?
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
          onPress={() => {delRoom(item.roomNumber)}}
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
  roomArr: state.roomEditor.roomArr
})

const mapActionsToProps = {
  deleteRoom: editActions.deleteRoom,
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
