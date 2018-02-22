import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import UserProfile from './UserProfile';
import HuntDetail from './HuntDetail';
import HuntCreate from './HuntCreate';
import styles from './styles';

export default class Main extends Component<{}> {
  constructor() {
    super()

    this.state = {
      huntNames: [{key: 'The Loop Hunt'}, {key: 'Montreal Hunt'}]
    }
  }

  handleNav = (e) => {
    console.log('i hate xcode')
    Alert.alert('pressed a button')
  }

  handleSearch = (e) => {
    Alert.alert('pressed search button')
    // <Content handleSearch={this.handleSearch} huntNames={this.state.huntNames}/>
  }

  handleCreate = (e) => {
    Alert.alert('pressed create button')
  }

        // <UserProfile huntData={this.state.huntNames}/>

        // <HuntDetail />

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <HuntCreate handleCreate={this.handleCreate}/>
        <Footer handleNav={this.handleNav}/>
      </View>
    );
  }
}
