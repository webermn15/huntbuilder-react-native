import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';
import Footer from './Footer';
import Content from './Content';
import styles from './styles';

export default class Main extends Component<{}> {
  constructor() {
    super()

    this.state = {
    }
  }

  handleNav = (e) => {
    console.log('i hate xcode')
    Alert.alert('pressed a button')
  }

  handleSearch = (e) => {
    Alert.alert('pressed search button')
    // <Content handleSearch={this.handleSearch}/>
  }

  render() {
    return (
      <View style={{flex: 1}}>
        
        <Footer handleNav={this.handleNav}/>
      </View>
    );
  }
}
