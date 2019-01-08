import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class DeepLinking extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#fef', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hi</Text>
      </View>
    )
  }
};

DeepLinking.navigationOptions = ({ navigation }) => ({
  title: 'Detail',
  headerLeft: null,
  headerRight: null,
});