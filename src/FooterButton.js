import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class FooterButton extends Component<{}> {

  render() {
    return (
      <Button 
      	style={styles.footerButton}
      	title={this.props.buttonText}
      	onPress={this.props.handleNav}
      />
    );
  }
}

FooterButton.propTypes = {
	buttonText: PropTypes.string
};