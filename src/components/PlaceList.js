import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './ListItem';


const PlaceList = props => {
  const places = props.places.map((place, idx) => {
    return (
      <ListItem 
        key={place} 
        placeName={place} 
        onItemPressed={() => props.handlePlaceDeleted(idx)}
      />
    )
  })
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
