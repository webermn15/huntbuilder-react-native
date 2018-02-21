import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import styles from './styles';

export default class Register extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handlePress = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  
  render() {
    return (
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.loginText}
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
          placeholder={'Username'}
        />
        <TextInput
          style={styles.loginText}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.loginText}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder={'Email'}
        />
        <Button
          title={'Register'}
          onPress={this.handlePress}
        />
        <Button
          title={'Have an account? Log in here'}
        />
      </View>
    );
  }
}