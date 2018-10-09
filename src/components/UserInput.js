import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const UserInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        value={props.placeName}
        placeholder="An Awesome Place"
        onChangeText={props.handlePlaceNameChange}
      />
      <Button title="Add" style={styles.placeInput} onPress={props.handlePlaceSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
})

export default UserInput;
