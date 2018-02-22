import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button, FlatList } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class HuntList extends Component<{}> {

  render() {
    return (
      <View style={styles.huntListContainer}>
				<FlatList
				  data={this.props.huntData}
				  renderItem={({item}) => <View style={styles.huntList}><Text>{item.key}</Text></View>}
				  onPress={(e) => console.log(e.target.value)}
				/>
      </View>
    );
  }
}

HuntList.propTypes = {
	huntData: PropTypes.array
};