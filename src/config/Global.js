import React from 'react';
import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
// iPhone XR - width: 414, height: 896

module.exports = {
  WHITE: '#fff',
  BLACK: '#000',

  BLUE: '#003049',
  RED: '#d62828',
  ORANGE: '#f77f00',
  YELLOW: '#fcbf49',
  LIME: '#eae2b7',

  CHALKDUSTER: 'Chalkduster',

  SCREEN_WIDTH: width,
  ASPECT_WIDTH: width / 414,
  SCREEN_HEIGHT: height,
  ASPECT_HEIGHT: height / 896,
};