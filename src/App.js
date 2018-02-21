import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import styles from './styles';

export default class App extends Component<{}> {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handlePress = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <Main /> 
    );
  }
}
