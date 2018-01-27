import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat'
import chatRecognition from './../ChatRecognition'

export default class Home extends Component {
  state = {
      messages: [],
      username: this.props.username
    }

    componentWillMount() {
      this.setState({
        messages: [
          {
            _id: 1,
            text: 'Hello ' + this.state.username,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png',
            },
          },
        ],
      })
    }

    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))

      var answer = chatRecognition(messages[0].text, this.state)[0];
      var image = chatRecognition(messages[0].text, this.state)[1];

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, {
          _id: this.state.messages.length + 1,
          text: answer,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png',
          },
          image: image
        }),
      }))
    }

    render() {
      return (
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      )
    }
}
