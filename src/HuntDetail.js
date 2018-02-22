import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';

export default class HuntDetail extends Component<{}> {
  render() {
    return (
      <View style={styles.huntDetail}>
        <View style={{justifyContent: 'flex-start', flex: 1}}>
        	<Text style={{fontSize: 32}}>Hunt Detail</Text>
          <Text>Hunt # 001</Text>
          <Text>Details and description of the hunt</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'darkblue'}}>
          <Text style={{color: 'white'}}>THIS IS THE MAP!</Text>
        </View>
      </View>
    );
  }
}
