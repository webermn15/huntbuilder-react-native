import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
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
    console.log(e.currentTarget.innerText)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Content />
        <Footer handleNav={this.handleNav}/>
      </View>
    );
  }
}
