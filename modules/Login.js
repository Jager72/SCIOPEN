import React from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import * as userActions from '../actions/user';

const Login = (props) => {

    const [data, setData] = React.useState({
        username: '',
        pin: '',
        secureTextEntry: true,
    });

    const userInputChange = (val) => {
        setData({
            ...data,
            username: val,
        });
    }

    const pinInputChange = (val) => {
        setData({
            ...data,
            pin: val,
            isValidPin: false
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (userName, pin) => {
        if ( data.username.length === 0 || data.pin.length === 0 ) {
            Alert.alert('Błąd!', 'Pola nie mogą być puste!');
            return;
        }
        props.login(userName, pin);
    }

    return(
        <View  style={styles.container}>
            <View style={styles.imgContainer}>
                <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                source={require('../assets/sci.png')}
                style={styles.logo}
                resizeMode='contain'
                />
            </View>
            <View style={styles.main}>
                <Animatable.View animation='fadeInUp' duraton="1500" style={styles.login}>
                    <Text style={styles.textHeader}>Witaj</Text>
                    <Text style={styles.text}>Login:</Text>
                    <View style={styles.container2}>
                        <View style={styles.row}>
                            <Feather
                                name="user"
                                color="white"
                                size={25}
                            />
                            <TextInput
                            autoCapitalize="none"
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            selectionColor={'white'}
                            onChangeText={(val) => userInputChange(val)}
                            />
                        </View>
                    </View>
                    <Text style={styles.text}>Pin:</Text>
                    <View style={styles.container2}>
                        <View style={styles.row}>
                            <Feather
                                name="lock"
                                color="white"
                                size={25}
                            />
                            <TextInput
                            autoCapitalize="none"
                            keyboardType="numeric"
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            selectionColor={'white'}
                            secureTextEntry={data.secureTextEntry}
                            onChangeText={(val) => pinInputChange(val)}
                            />
                            <TouchableOpacity
                            onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="white"
                                    size={25}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="white"
                                    size={25}
                                />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container2}>
                    <TouchableOpacity
                    onPress={() => {loginHandle( data.username, data.pin )}}
                    >
                        <View style={styles.row2}>
                            <View style={styles.row3}>
                                <Feather
                                    name="log-in"
                                    color="white"
                                    size={35}
                                />
                                <Text style={styles.text2}>Zaloguj</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

const mapActionsToProps = {
    login: userActions.login
}

export default connect(mapStateToProps,mapActionsToProps)(Login);

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    container2:{
        flex:0,
        alignItems: 'center',
    },
    main: {
        height:'100%',
        width:'100%',
        flex:2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        flex:1
    },
    login: {
        flex: 0,
        backgroundColor: '#0b6cb0',
        width:'100%',
        height:'100%',
        alignSelf:'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop:10,
    },
    textHeader:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 10,
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10,
        marginLeft: 15,
    },
    text2:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft:5,
    },
    logo: {
        flex:1,
        aspectRatio: 1,
        margin: 30,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: 'white',
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingBottom: 5,
        width: '80%',
    },
    row2: {
        marginTop: 20,
        borderWidth: 0,
        borderColor: 'white',
        width: '80%',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#194A8D'
    },
    row3: {
        flexDirection: 'row',
    },
});
