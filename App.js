/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, TextInput, View, Text, Button } from 'react-native';
import UserInput from './src/components/UserInput';
import PlaceList from './src/components/PlaceList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
  }

  handlePlaceNameChange = (val) => {
    this.setState({ placeName: val })
  }

  handlePlaceSubmit = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ""
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInput 
          handlePlaceNameChange={this.handlePlaceNameChange}
          handlePlaceSubmit={this.handlePlaceSubmit}
          placeName={this.state.placeName}
        />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 26
  }
});
