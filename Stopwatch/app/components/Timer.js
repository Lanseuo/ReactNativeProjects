import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { formatTime } from './../utils'

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {formatTime(this.props.interval)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 76,
    fontWeight: '200'
  }
});

export default Timer;
