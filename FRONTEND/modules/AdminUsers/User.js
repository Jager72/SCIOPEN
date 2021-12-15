import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Picker} from "react-native";
import { color } from "../../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import * as editActions from '../../actions/userEditor';
import DATA from "../AdminUsers/UsersList";
import roleDATA from './RolesList';
//import { Actions } from 'react-native-router-flux';

const User = props => {

  const [selectedValue, setSelectedValue] = useState(props.item.role);

  var item = props.item;
  const editUser = (id) => {
    if(props.currentUser === null){
      props.setCurrentUserEdit(id);
    } else {
      Alert.alert('Uwaga','Zakończ edycję poprzedniego użytkownika!')
    }
  }
    const [data, setData] = React.useState({
        changedUserNick: null,
        changedUserRole: null,
        changedUserPin: null,
    });
    const userNickChange = (val) => {
        setData({
            ...data,
            changedUserNick: val,
        });
    }
    const userRoleChange = (val) => {
      setData({
          ...data,
          changedUserRole: val,
      });
  }
  const userPinChange = (val) => {
    setData({
        ...data,
        changedUserPin: val,
    });

  }
    
    const saveUser = () => {
      if ( data.changedUserNick === null && data.changedUserRole === null && data.changedUserPin === null ) {
        Alert.alert('Błąd!', 'Nie wprowadzono żadnych zmian!');
        return;
      }
      
    let obj = DATA.find(x => x.id == props.currentUser);
    let index = DATA.indexOf(obj);
      if(data.changedUserNick !== null){
        DATA[index].name=data.changedUserNick;
      }
      if(data.changedUserPin !== null){
        DATA[index].pin=data.changedUserPin;
      }
      if(data.changedUserRole !== null){
        DATA[index].role=data.changedUserRole;
      }
      ///
      userNickChange(null)
      userRoleChange(null)
      userPinChange(null)
      props.setCurrentUserEdit(null);
    }

    const cancelEditing = () => {
      userNickChange(null)
      userRoleChange(null)
      userPinChange(null)
      props.setCurrentUserEdit(null);
    }
    
    const deleteUser = (id) => {
      /*delete user from db instead of this:*/
      let obj = DATA.find(x => x.id == id);
      let index = DATA.indexOf(obj);
      DATA.splice(index, 1);
      //Actions.refresh();
      /////
    }
  


  return (
    <View style={styles.users}>
      <Text style={styles.idText}>#{item.id}</Text>

      <View style={styles.Info}>
        <View style={styles.Info1}>
            <Text style={styles.infoTextHeader}>Nick:</Text>
        </View>
        <View style={styles.Info2}>
            {item.id !== props.currentUser ?
          <Text style={styles.infoText}>{item.name}</Text>
          :
          <TextInput
          style={styles.infoText}
          underlineColorAndroid="transparent"
          selectionColor={'white'}
          placeholder={item.name}
          placeholderTextColor="#D7D7D7"
          maxLength={8}
          onChangeText={(val) => userNickChange(val)}
      />
          }
            
        </View>
      </View>



      <View style={styles.Info}>
        <View style={styles.Info1}>
            <Text style={styles.infoTextHeader}>Rola:</Text>
        </View>
        <View style={styles.Info2}>
        {item.id !== props.currentUser ?
          <Text style={styles.infoText}>{item.role}</Text>
          :
          <Picker
          selectedValue={selectedValue}
          style={{ height: 300, width: 130, 
          color: 'white',
          textAlign: "center",
          fontSize: 15,
          }}
          onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue);  userRoleChange(itemValue)}}
          >
            <Picker.Item label="Rola" value=""/>
            {
              roleDATA.map((item) => {
                return (
                <Picker.Item item={item} key={item.id} label={item.name} value={item.name} />
              )
             })
            }
          </Picker>

          }
        </View>
      </View>

      <View style={styles.Info}>
        <View style={styles.Info1}>
            <Text style={styles.infoTextHeader}>PIN:</Text>
        </View>
        <View style={styles.Info2}>
          {item.id !== props.currentUser ?
          <Text style={styles.infoText}>{item.pin}</Text>
          :
          <TextInput
          style={styles.infoText}
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          selectionColor={'white'}
          placeholder={item.pin}
          maxLength={4}
          placeholderTextColor="#D7D7D7"
          onChangeText={(val) => userPinChange(val)}
      />
          }
        </View>
      </View>

      {item.id !== props.currentUser ?
      <View style={styles.buttonHolder}>
          <TouchableOpacity
          onPress={() => {editUser(item.id)}}
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
  currentUser: state.userEditor.currentUser,
  creatingUser: state.userEditor.creatingUser
})

const mapActionsToProps = {
  setCurrentUserEdit: editActions.setCurrentUserEdit,
  setUserCreatingStatus: editActions.setUserCreatingStatus
}

export default connect(mapStateToProps,mapActionsToProps)(User);

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
