import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black'
  },
  loginText: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1
  },
  content: {
    flex: 8,
    backgroundColor: 'skyblue'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footerButton: {
    backgroundColor: 'black',
    borderWidth: 2,
    width: 120,
    height: 50
  }
});

export default styles;