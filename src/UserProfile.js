import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import HuntList from './HuntList';
import UserInfo from './UserInfo';
import styles from './styles';

export default class UserProfile extends Component<{}> {
  render() {
    return (
      <View style={styles.userProfile}>
        <UserInfo />
        <HuntList huntData={this.props.huntData}/>
      </View>
    );
  }
}
