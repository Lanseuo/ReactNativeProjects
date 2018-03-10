import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class RoundButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.disabled ? null : () => this.props.onPress()}
        style={[ styles.container, { backgroundColor: this.props.background } ]}
        activeOpacity={this.props.disabled ? 1.0 : 0.7}>
        <View style={ styles.border }>
          <Text style={[ styles.text, {color: this.props.color}]}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 18
  },

  border: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default RoundButton;
