import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Timer from './components/Timer'
import RoundButton from './components/RoundButton'
import ButtonsRow from './components/ButtonsRow'
import LapsTable from './components/LapsTable'

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()

    this.state = {
      start: 0,
      now: 0,
      laps: [],
      timer: null
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  start() {
    this.setState({
      start: this.state.start == 0 ? new Date().getTime() : this.state.start,
      now: new Date().getTime()
    })
    this.setState({
      timer: setInterval(() => {
        this.setState({ now: new Date().getTime() })
      }, 100)
    })
  }

  reset() {
    this.setState({
      start: 0,
      now: 0,
      laps: []
    })
  }

  lap() {
    let newLaps = this.state.laps
    newLaps.push(new Date().getTime() - this.state.start)
    this.setState({
      laps: newLaps
    })
  }

  stop() {
    clearInterval(this.state.timer)
    this.setState({ timer: null })
  }

  render() {
    const timer = this.state.now - this.state.start
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#0D0D0D"
          barStyle="light-content"
        />

        <Timer interval={timer}/>

        {!this.state.timer && (
          <ButtonsRow>
            <RoundButton
              title="Reset"
              color="#FFFFFF"
              disabled={!this.state.timer}
              background="#3D3D3D"
              onPress={this.reset.bind(this)}/>
            <RoundButton
              title="Start"
              color="#50D167"
              disabled={false}
              background="#1B361F"
              onPress={this.start.bind(this)}/>
          </ButtonsRow>
        )}

        {this.state.timer && (
          <ButtonsRow>
            <RoundButton
              title="Lap"
              color="#FFFFFF"
              disabled={false}
              background="#3D3D3D"
              onPress={this.lap.bind(this)}/>
            <RoundButton
              title="Stop"
              color="#E33935"
              disabled={false}
              background="#3C1715"
              onPress={this.stop.bind(this)}/>
          </ButtonsRow>
        )}

        <LapsTable laps={this.state.laps}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingTop: 130
  }
});
