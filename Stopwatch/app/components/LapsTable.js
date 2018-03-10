import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import Lap from './Lap'

class LapsTable extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.laps.map((lap, index) => (
          <Lap
            number={this.props.laps.length - index}
            key={this.props.laps.length - index}
            interval={lap}></Lap>
        ))}
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  }
});

export default LapsTable;
