import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';

export default class Content extends Component<{}> {
  constructor() {
    super()

    this.state = {
    }
  }

  handleNav = (e) => {
    console.log(e.currentTarget.innerText)
  }

  render() {
    return (
      <View style={styles.content}>
      </View>
    );
  }
}
