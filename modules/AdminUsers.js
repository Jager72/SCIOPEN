import React from 'react';
import {Alert, Modal,ScrollView, StyleSheet, TouchableOpacity, Text, TextInput, View, Button} from 'react-native';
import User from "./AdminUsers/User";
import {color} from "../helpers/styles";
import DATA from './AdminUsers/UsersList';
import {connect} from 'react-redux';
import * as editActions from '../actions/userEditor';
import Feather from 'react-native-vector-icons/Feather';

const AdminUsers = props => {
    const openCreatingPanel = () => {
        props.setRoomCreatingStatus()
    }
    
    const cancelCreating = () => {
        props.setRoomCreatingStatus()
    }

    const createUser = () => {
        props.setRoomCreatingStatus()
    }
    return(
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.textHeader}>Użytkownicy</Text>
            </View>

             {!props.creating ?
            <TouchableOpacity 
            onPress={() => {openCreatingPanel()}}
            style={styles.button}>
                <Text style={styles.textButton}>Dodaj osobę</Text>
            </TouchableOpacity>
            :
            <View style={styles.user}>

                <Text style={styles.idText}>#</Text>
        
              
                <View style={styles.Info}>
                    <View style={styles.Info1}>
                         <Text style={styles.infoTextHeader}>Nick:</Text>
                    </View>
                    <View style={styles.Info2}>
                    <TextInput
                        style={styles.infoText}
                        underlineColorAndroid="transparent"
                        selectionColor={'white'}
                        placeholder={'Nazwa'}
                        placeholderTextColor="#D7D7D7"
                        //onChangeText={{}}
                    />
                     </View>
                </View>

                <View style={styles.Info}>
                    <View style={styles.Info1}>
                         <Text style={styles.infoTextHeader}>Rola:</Text>
                    </View>
                    <View style={styles.Info2}>
                    <TextInput
                        style={styles.infoText}
                        underlineColorAndroid="transparent"
                        selectionColor={'white'}
                        placeholder={'Rola'}
                        placeholderTextColor="#D7D7D7"
                        //onChangeText={{}}
                    />
                     </View>
                </View>

                <View style={styles.Info}>
                    <View style={styles.Info1}>
                         <Text style={styles.infoTextHeader}>Pin:</Text>
                    </View>
                    <View style={styles.Info2}>
                    <TextInput
                        style={styles.infoText}
                        keyboardType="numeric"
                        underlineColorAndroid="transparent"
                        selectionColor={'white'}
                        placeholder={'Pin'}
                        placeholderTextColor="#D7D7D7"
                        //onChangeText={{}}
                    />
                     </View>
                </View>


                <View style={styles.buttonHolder}>
                    <TouchableOpacity
                    onPress={() => {createUser()}}
                    style={styles.saveButton}
                    >
                        <Feather
                                name="check"
                                color="#EBEBEB"
                                size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {cancelCreating()}}
                    style={styles.deleteButton}
                    >
                        <Feather
                                name="x-square"
                                color="#EBEBEB"
                                size={35}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            }

            <ScrollView>
                {
                    DATA.map((item) => {
                        return (
                        <User item={item} key={item.id}/>
                        )
                    })
                }
               
            </ScrollView>
            
        </View>
    );
}
const mapStateToProps = state => ({
    currentRoom: state.roomEditor.currentRoom,
    creating: state.roomEditor.creating
  })
  
  const mapActionsToProps = {
    setCurrentRoomEdit: editActions.setCurrentRoomEdit,
    setRoomCreatingStatus: editActions.setRoomCreatingStatus
  }


  
  export default connect(mapStateToProps,mapActionsToProps)(AdminUsers);

const styles = StyleSheet.create({
    Header: {
        height: 60,
        flexDirection: "row",
        backgroundColor: color.highlightColor,
        alignItems: "center",
        justifyContent: "space-around",
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

      buttonHolder: {
          flex:1.3,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          flexDirection: 'column',
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

      idText: {
        flex: 1.2,
        color:"white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
      },

      user : {
        height: 100,
        flexDirection: "row",
        backgroundColor: color.secondaryColor,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        borderRadius: 25,
      },

    button: {
        height: 60,
        flexDirection: "row",
        backgroundColor: color.highlightColor,
        borderColor: "#477d00",
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin: 8,
        marginBottom: 8,
    },

    textButton: {
        flex: 3,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },

    textHeader: {
        flex: 1,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
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
