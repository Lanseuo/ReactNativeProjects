import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { formatTime } from './../utils'

class Lap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Lap {this.props.number}</Text>
        <Text style={styles.text}>{formatTime(this.props.interval)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10
  },

  text: {
    color: 'white',
    fontSize: 18
  }
});

export default Lap;
