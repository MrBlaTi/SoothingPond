import React from 'react';
import { StyleSheet, Text, View, Button, Image, Animated } from 'react-native';

export default class App extends React.Component {
  animProps = {
    animWidth: new Animated.Value(100),
    animHeight: new Animated.Value(100),
  }

  renderText() {
    if(this.flag) {
      return (
        <View>
        </View>
        );
    } else {
      return (
        <View>
        </View>
        );
    }
  }

  constructor() {
    super();
    this.style = styles.container;
    this.flag = false;
    this.animWidth = new Animated.Value(1);
    this.animHeight = new Animated.Value(1);
    this.onClickButton = this.onClickButton.bind(this);
    this.onClickCamera = this.onClickCamera.bind(this);
  }

  onClickButton(){
    Animated.timing(                  // Animate over time
      this.animWidth,            // The animated value to drive
      {
        toValue: 500,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();
    Animated.timing(                  // Animate over time
      this.animHeight,            // The animated value to drive
      {
        toValue: 500,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();
  }

  onClickCamera(){
    Animated.timing(                  // Animate over time
      this.animWidth,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();
    Animated.timing(                  // Animate over time
      this.animHeight,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();
  }

  render() {
    let { animWidth } = this.animProps;
    let { animHeight } = this.animProps;
    return (
      <View style={this.style}>
        {this.renderText()}
        <Animated.Image
          style={[pngStyle.full, {width: this.animWidth, height: this.animHeight}]}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <Button title='Fade in' onPress={this.onClickButton}/>
        <Button title='Fade out' onPress={this.onClickCamera}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pngStyle = StyleSheet.create({
  full: {
    width: 100,
    height: 100
  }
});
