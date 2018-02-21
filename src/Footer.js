import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import styles from './styles';
import FooterButton from './FooterButton';

export default class Footer extends Component<{}> {

  render() {
    return (
      <View style={styles.footer}>
      	<FooterButton handleNav={this.props.handleNav}
      		buttonText={'User Profile'}
      	/>
      	<FooterButton handleNav={this.props.handleNav}
      		buttonText={'Create Hunt'}
      	/>
      	<FooterButton handleNav={this.props.handleNav}
      		buttonText={'Home'}
      	/>
      </View>
    );
  }
}
