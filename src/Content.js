import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';
import HuntList from './HuntList';
import HuntSearch from './HuntSearch';

export default class Content extends Component<{}> {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.content}>
        <HuntSearch 
          handleSearch={this.props.handleSearch}
        />
        <HuntList 
          huntData={this.props.huntNames}
        />
      </View>
    );
  }
}
