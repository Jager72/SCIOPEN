import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { color } from "../../helpers/styles";
import Feather from 'react-native-vector-icons/Feather';

const Classroom = ({ item, userID }) => {
  return (
    <View style={item.state==='busy' && item.occupant !== userID ?  styles.notAvailableClass : styles.class}>

      <Text style={styles.typeText}>{item.roomNumber}</Text>

      <View style={styles.Description}>
          <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={styles.buttonHolder}>
          {item.state==='free' ?
          <TouchableOpacity
          onPress={() => {/*Change state to 'busy' and occupant to value of userID*/}}
          style={styles.takeButton}
          >
            <Feather
                    name="log-in"
                    color="#EBEBEB"
                    size={45}
            />
          </TouchableOpacity> : 
          item.state==='busy' && item.occupant !== userID ? 
          <View style={styles.notAvailable}>
            <Feather
                    name="x-square"
                    color="#EBEBEB"
                    size={45}
            />
          </View> : 
          <TouchableOpacity
          onPress={() => {/*Change state to 'free' and occupant to null*/}}
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

export default Classroom ;

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
