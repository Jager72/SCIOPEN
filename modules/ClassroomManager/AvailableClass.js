import React, { useState } from "react";
import {StyleSheet, Text, View, Button } from "react-native";
import { color } from "../../helpers/styles";

const AvailableClass = ({ classNumber, description }) => {
  return (
    <View style={styles.AvailableClass }>

      <Text style={styles.typeText}>{classNumber}</Text>

      <View style={styles.Description}>
          <Text style={styles.descriptionText} >{description}</Text>
      </View>
      
      <View style={styles.Button}>
          <Button color={color.highlightColor} title=" Zajmij "/>
      </View>
     
    </View>
  );
};

export default AvailableClass ;

const styles = StyleSheet.create({
  AvailableClass : {
    height: 90,
    flexDirection: "row",
    backgroundColor: color.secondaryColor,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 8,
    padding: 8,
    borderRadius: 25,
  },

  typeText: {
    flex: 1,
    color:"white",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: "3%",
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
    padding: 5

  }
  ,
  Button: {
     
      marginRight: "2%",
      marginLeft: "3%"

  }

});
