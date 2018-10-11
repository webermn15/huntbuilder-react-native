import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('');

export default class HuntCreate extends Component<{}> {
  render() {
    return (
      <View style={styles.huntCreate}>
        <View style={{flex: 1}}>
        	<Text>Form element placeholder</Text>
          <Button 
            title={'Create'} 
            onPress={this.props.handleCreate}
          />
        </View>
        <View style={{flex: 2}}>
          <MapboxGL.MapView
              styleURL={MapboxGL.StyleURL.Street}
              zoomLevel={15}
              centerCoordinate={[11.256, 43.770]}
              style={{flex: 1}}>
          </MapboxGL.MapView>
        </View>
      </View>
    );
  }
}
