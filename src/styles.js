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
  header: {
    height: 20,
    backgroundColor: 'pink'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  footerButton: {
    backgroundColor: 'pink',
    borderWidth: 3,
    borderColor: 'black',
    width: 120
  },
  huntListContainer: {
    backgroundColor: 'purple',
    flex: 5,
    alignItems: 'center'
  },
  huntList: {
    padding: 10,
    backgroundColor: 'lightseagreen',
    height: 80,
    width: 396,
    marginTop: 10
  },
  searchContainer: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  userProfile: {
    flex: 8,
    backgroundColor: 'skyblue'
  },
  userInfo: {
    flex: 2,
    justifyContent: 'space-between',
    backgroundColor: 'peachpuff'
  },
  huntDetail: {
    flex: 8,
    backgroundColor: 'lightgrey',
    justifyContent: 'flex-start'
  },
  huntCreate: {
    flex: 8,
    justifyContent: 'space-between'
  },
  mapContainer: {
    flex: 1
  }
});

export default styles;