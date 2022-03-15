import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {color} from "../../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import * as editActions from '../../actions/roomEditor';
import * as roomActions from '../../actions/rooms';

const Classroom = props => {

    useEffect(() => {
        props.FetchAllRooms();
    }, []);


    var item = props.item;
    const [data, setData] = useState({
        changedRoomNumber: null,
        changedRoomDescription: null,
        currentRoom: null,
        maxVisitors: null,
        currentVisitors: null,
    });
    const editRoom = (number) => {
        if (data.currentRoom === null) {
            setCurrentRoom(number)
        } else {
            Alert.alert('Uwaga', 'Zakończ edycję poprzedniego pokoju!')
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
    const maxVisitorsChange = (val) => {
        setData({
            ...data,
            maxVisitors: val,
        });
    }
    const currentVisitorsChange = (val) => {
        setData({
            ...data,
            currentVisitors: val,
        });
    }

    const saveRoom = () => {
        if (data.changedRoomNumber === null && data.changedRoomDescription === null && data.maxVisitors === null && data.currentVisitors === null) {
            Alert.alert('Błąd!', 'Nie wprowadzono zmian ani numeru sali ani opisu sali!');
            return;
        }
        let des = item.description
        let nr = item.roomNumber
        let max = item.maxVisitors
        let cur = item.currentVisitors
        /* check if new roomNumber is unique and then update roomNumber and roomDescription in db instead of this:*/
        //let obj = props.roomArr.find(x => x.roomNumber == data.currentRoom);
        //let index = props.roomArr.indexOf(obj);
        if (data.changedRoomNumber !== null) {
            //props.roomArr[index].roomNumber=data.changedRoomNumber;
            nr = data.changedRoomNumber
        }
        if (data.changedRoomDescription !== null) {
            des = data.changedRoomDescription
            //props.roomArr[index].description=data.changedRoomDescription;
        }
        if (data.maxVisitors !== null) {
            //props.roomArr[index].maxVisitors=data.maxVisitors;
            max = data.maxVisitors
        }
        if (data.currentVisitors !== null) {
            //props.roomArr[index].currentVisitors=data.currentVisitors;
            cur = data.currentVisitors
        }
        let obj2 =
            {
                roomNumber: nr,
                name: item.name,
                description: des,
                available: item.available,
                startDate: item.startDate,
                currentVisitors: cur,
                maxVisitors: max,
            }
        props.Update(obj2)
        props.FetchAllRooms();

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
        props.Delete(number)
        props.FetchAllRooms()
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
            <View style={styles.visitors}>
                {item.roomNumber !== data.currentRoom ?
                    <Text style={styles.maxVisitorsText}>{item.maxVisitors}</Text>
                    :
                    <TextInput
                        autoCapitalize="none"
                        keyboardType="numeric"
                        style={styles.maxVisitorsText}
                        underlineColorAndroid="transparent"
                        selectionColor={'white'}
                        placeholder={item.maxVisitors.toString()}
                        placeholderTextColor="#D7D7D7"
                        maxLength={3}
                        onChangeText={(val) => maxVisitorsChange(val)}
                    />
                }
            </View>
            <View style={styles.visitors}>
                {item.roomNumber !== data.currentRoom ?
                    <Text style={styles.currentVisitorsText}>{item.currentVisitors}</Text>
                    :
                    <TextInput
                        autoCapitalize="none"
                        keyboardType="numeric"
                        style={styles.currentVisitorsText}
                        underlineColorAndroid="transparent"
                        selectionColor={'white'}
                        placeholder={item.currentVisitors.toString()}
                        placeholderTextColor="#D7D7D7"
                        maxLength={3}
                        onChangeText={(val) => currentVisitorsChange(val)}
                    />
                }
            </View>
            {item.roomNumber !== data.currentRoom ?
                <View style={styles.buttonHolder}>
                    <TouchableOpacity
                        onPress={() => {
                            editRoom(item.roomNumber)
                        }}
                        style={styles.editButton}
                    >
                        <Feather
                            name="edit-3"
                            color="#EBEBEB"
                            size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            delRoom(item.roomNumber)
                        }}
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
                        onPress={() => {
                            saveRoom()
                        }}
                        style={styles.saveButton}
                    >
                        <Feather
                            name="check"
                            color="#EBEBEB"
                            size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            cancelEditing()
                        }}
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
    roomArr: state.roomEditor.roomArr,
    rooms: state.rooms.rooms,
})

const mapActionsToProps = {
    deleteRoom: editActions.deleteRoom,
    FetchAllRooms: roomActions.FetchAll,
    Update: roomActions.Update,
    Delete: roomActions.Delete,
    Create: roomActions.Create,
}

export default connect(mapStateToProps, mapActionsToProps)(Classroom);

const styles = StyleSheet.create({
    editButton: {
        backgroundColor: 'orange',
        borderRadius: 10,
        margin: 3,
        padding: 2,
    },
    saveButton: {
        backgroundColor: color.highlightColor,
        borderRadius: 10,
        margin: 3,
        padding: 2,
    },
    deleteButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 3,
        padding: 2,
    },
    class: {
        height: 100,
        flexDirection: "row",
        backgroundColor: color.secondaryColor,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        borderRadius: 25,
    },
    typeText: {
        width: '20%',
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
    },
    Description: {
        width: '50%',
        backgroundColor: "#064c7d",
        height: "90%",
        borderRadius: 5,
        color: 'white',
        justifyContent: 'center'
    },
    visitors:{
        width: '5%',
        backgroundColor: "#064c7d",
        height: "90%",
        borderRadius: 5,
        color: 'white',
        justifyContent: 'center',
        textAlign: "center"
    },
    descriptionText: {
        color: 'white',
        textAlign: "center",
        fontSize: 15,

    },
    buttonHolder: {
        width: '20%',
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
