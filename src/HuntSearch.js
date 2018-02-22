import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';

export default class Content extends Component<{}> {
  constructor() {
    super()

    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <Text> Search nearby Hunts by keyword</Text>
        <TextInput
          style={styles.loginText}
          onChangeText={(text) => this.setState({search: text})}
          value={this.state.search}
          placeholder={'Enter keyword'}
        />
        <Button
          style={styles.footerButton}
          title={'Search'}
          onPress={this.props.handleSearch}
        />
      </View>
    );
  }
}
