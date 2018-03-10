import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

class ButtonsRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginTop: 80,
    marginBottom: 30
  }
});

export default ButtonsRow;
