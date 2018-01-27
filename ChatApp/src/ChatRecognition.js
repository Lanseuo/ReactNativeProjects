export default function(message, state) {
  message = message.toLowerCase();

  if (message.contains('joke')) {
    return ['What is a programmer\'s favourite hangout place? - Foo Bar']
  } else if (message.contains('your name')) {
    return ['My name is React Native.']
  } else if (message.contains('my name')) {
    return ['Your name is ' + state.username + '.']
  } else if (message.contains('monkey')) {
    return [undefined, 'https://static.pexels.com/photos/50582/selfie-monkey-self-portrait-macaca-nigra-50582.jpeg']
  } else if (message.contains('elephant')) {
    return [undefined, 'https://static.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg']
  } else if (message.contains('time')) {
    return ['It is ' + new Date().getHours() + ':' + new Date().getMinutes() + '.']
  } else {
    return ['Sorry, I didn\'t get that.']
  }
}
