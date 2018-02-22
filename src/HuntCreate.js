import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';

export default class HuntCreate extends Component<{}> {
  render() {
    return (
      <View style={styles.huntCreate}>
        <View style={{flex: 1}}>
        	<Text>Gotta add my form elements up here for creation :) maybe ill swap the map and the form idk</Text>
          <Button 
            title={'Create'} 
            onPress={this.props.handleCreate}
          />
        </View>
        <View style={{flex: 2, backgroundColor: 'darkblue'}}>
          <Text style={{color: 'white'}}>THIS IS THE MAP!</Text>
        </View>
      </View>
    );
  }
}
