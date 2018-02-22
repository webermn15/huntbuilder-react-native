import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';

export default class UserInfo extends Component<{}> {
  render() {
    return (
      <View style={styles.userInfo}>
      	<View>
	      	<Text style={{fontSize: 32}}>User Profile</Text>
	        <Text>User # 001</Text>
	        <Text>Details of the users' account</Text>
	       </View>
	       <Text style={{alignSelf: 'center', fontSize: 20}}>Hunts you manage</Text>
      </View>
    );
  }
}
