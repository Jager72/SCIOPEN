import React, {useEffect} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Classroom from "./ClassroomEditor/Classroom";
import {color} from "../helpers/styles";
import {connect} from 'react-redux';
import * as editActions from '../actions/roomEditor';
import Feather from 'react-native-vector-icons/Feather';
import * as roomActions from '../actions/rooms';
import Header from './Header';

const ClassroomEditor = props => {

    useEffect(() => {
        setInterval(props.FetchAllRooms, 1000);
    }, []);

    const [data, setData] = React.useState({
        newRoomNumber: null,
        newRoomDescription: null,
        creating: false,
    });

    const changeCreatingStatus = () => {
        setData({
            ...data,
            creating: !data.creating,
        });
    }

    const roomNumberChange = (val) => {
        setData({
            ...data,
            newRoomNumber: val,
        });
    }
    const roomDescriptionChange = (val) => {
        setData({
            ...data,
            newRoomDescription: val,
        });
    }

    const openCreatingPanel = () => {
        changeCreatingStatus()
    }

    const cancelCreating = () => {
        roomNumberChange(null)
        roomDescriptionChange(null)
        changeCreatingStatus()
    }

    const createRoom = () => {
        if (data.newRoomNumber === null || data.newRoomDescription === null) {
            Alert.alert('Błąd!', 'Nie wprowadzono numeru sali lub opisu sali!');
            return;
        }
        /*check if roomNumber is unique and than add room to db instead of this:*/
        if(props.rooms.includes(data.newRoomNumber)){
            Alert.alert('Błąd!', 'Sala o podanym numerze już istnieje!');
            return;
        }
        let obj =
            {
                roomNumber: data.newRoomNumber,
                name: "string",
                description: data.newRoomDescription,
                available: true,
                startDate: "string"
            }
        props.Create(obj)
        props.FetchAllRooms()
        props.FetchAllRooms()
        ////////
        roomNumberChange(null)
        roomDescriptionChange(null)
        changeCreatingStatus()
        props.FetchAllRooms()
    }
    return (
        <View style={styles.container}>
            <Header title={"Edytor Sal"} path={'/'}/>
            <ScrollView>
                {
                    props.rooms.map((item) => {
                        return (
                            <Classroom item={item} key={item.roomNumber}/>
                        )
                    })
                }
                {!data.creating ?
                    <TouchableOpacity
                        onPress={() => {
                            openCreatingPanel()
                        }}
                        style={styles.button}>
                        <Text style={styles.textButton}>Dodaj salę</Text>
                    </TouchableOpacity>
                    :
                    <View style={styles.class}>
                        <TextInput
                            autoCapitalize="none"
                            keyboardType="numeric"
                            style={styles.typeText}
                            underlineColorAndroid="transparent"
                            selectionColor={'white'}
                            placeholder={'000'}
                            placeholderTextColor="#D7D7D7"
                            maxLength={3}
                            onChangeText={(val) => roomNumberChange(val)}
                        />
                        <View style={styles.Description}>
                            <TextInput
                                style={styles.descriptionText}
                                underlineColorAndroid="transparent"
                                selectionColor={'white'}
                                placeholder={'Opis'}
                                placeholderTextColor="#D7D7D7"
                                multiline={true}
                                onChangeText={(val) => roomDescriptionChange(val)}
                            />
                        </View>
                        <View style={styles.buttonHolder}>
                            <TouchableOpacity
                                onPress={() => {
                                    createRoom()
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
                                    cancelCreating()
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
                    </View>
                }
            </ScrollView>

        </View>
    );
}


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

export default connect(mapStateToProps, mapActionsToProps)(ClassroomEditor);

const styles = StyleSheet.create({
    Header: {
        height: 60,
        flexDirection: "row",
        backgroundColor: color.highlightColor,
        alignItems: "center",
        justifyContent: "space-around",
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

    typeText: {
        flex: 1.3,
        color: "white",
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
        justifyContent: 'center',
        padding: 3
    },
    descriptionText: {
        color: 'white',
        textAlign: "center",
        fontSize: 15,

    },
    buttonHolder: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
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

    button: {
        height: 60,
        flexDirection: "row",
        backgroundColor: color.highlightColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        margin: 8,
    },

    textButton: {
        flex: 3,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
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
        marginRight: "50%",
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
        flex: 1,
    }
});
