import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import { color } from "../../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import * as editActions from '../../actions/userEditor';
import DATA from "../AdminUsers/UsersList";
import { Reducer } from "react-native-router-flux";

const Users = props => {
  var item = props.item;
  

  const deleteUser = (id) => {
    /*delete user from db instead of this:*/
    let obj = DATA.find(x => x.id == id);
    let index = DATA.indexOf(obj);
    DATA.splice(index, 1);
  }

  return (
    <View style={styles.users}>
      <Text style={styles.idText}>#{item.id}</Text>

      <View style={styles.Info}>
        <View style={styles.Info1}>
            <Text style={styles.infoTextHeader}>Nick:</Text>
        </View>
        <View style={styles.Info2}>
            <Text style={styles.infoText}>{item.name}</Text>
        </View>
      </View>

      <View style={styles.Info}>
        <View style={styles.Info1}>
            <Text style={styles.infoTextHeader}>Rola:</Text>
        </View>
        <View style={styles.Info2}>
          <Text style={styles.infoText}>{item.role}</Text>
        </View>
      </View>

      <View style={styles.Info}>
        <View style={styles.Info1}>
            <Text style={styles.infoTextHeader}>PIN:</Text>
        </View>
        <View style={styles.Info2}>
          <Text style={styles.infoText}>{item.pin}</Text>
        </View>
      </View>

      {item.id !== props.currentUser ?
      <View style={styles.buttonHolder}>
          <TouchableOpacity
          onPress={() => {}}
          style={styles.editButton}
          >
            <Feather
                    name="edit-3"
                    color="#EBEBEB"
                    size={35}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {deleteUser(item.id)}}
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
          onPress={() => {saveUser()}}
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

export default connect(mapStateToProps,mapActionsToProps)(Users);

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

  users : {
    height: 100,
    flexDirection: "row",
    backgroundColor: color.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 25,
  },

  idText: {
    flex: 1.2,
    color:"white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  Info: {
    flex: 1.1,
    backgroundColor: "#064c7d",
    height: "80%",
    borderRadius: 4,
    margin: 1,
    color: 'white',
    justifyContent: 'center'
  },
  Info1: {
    flex: 1,
    backgroundColor: '#043557',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  Info2: {
    flex: 3,
    justifyContent: 'center'
  },
  infoTextHeader: {
    color: 'white',
    textAlign: "center",
    fontSize: 15,

  },
  infoText: {
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

});
