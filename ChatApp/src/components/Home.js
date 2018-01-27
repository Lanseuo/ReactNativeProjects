import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Home extends Component {
  state = {
    name: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./../img/logo.png')} style={{width: 100, height: 100}}/>
          <Text style={styles.title}>ChatApp</Text>
        </View>

        <View style={styles.loginContainer}>
          <TextInput
            onChangeText={(text) => this.setState({name: text})}
            onSubmitEditing={() => {
              Actions.chat({
                username: this.state.name,
              });
            }}
            value={this.state.name}
            style={styles.nameInput}
            placeholder='username'
            underlineColorAndroid='transparent'/>
          <TouchableOpacity
            onPress={() => {
              Actions.chat({
                username: this.state.name,
              });
            }}
            style={styles.buttonContainer}
            title='Next'>
            <Text style={styles.buttonText}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    flex: 1
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  title: {
    color: 'white',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    fontSize: 25,
    opacity: 0.9
  },

  loginContainer: {
    padding: 20
  },

  nameInput: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },

  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }
});
