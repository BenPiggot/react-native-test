import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './ListItem';


const PlaceList = props => {
  const places = props.places.map(place => <ListItem key={place} placeName={place} />)
  return (
    <View style={styles.listContainer}>
      {places}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})

export default PlaceList;
