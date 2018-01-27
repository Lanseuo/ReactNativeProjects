import React, { Component } from 'react';
import { View, Platform, StatusBar } from 'react-native'

import Home from './components/Home';
import Chat from './components/Chat';

import { Router, Scene, Stack } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#3498db"
          barStyle="light-content"
        />

        <Router>
          <Stack key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
            <Scene hideNavBar={true} key='home' component={Home} title='Home'/>
            <Scene key='chat' component={Chat} title='Chat'/>
          </Stack>
        </Router>
      </View>
    )
  }
}
