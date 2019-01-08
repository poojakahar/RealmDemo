import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from '../../config/styles';

const Header = (props) => {
  return(
    <View>
      <View style={styles.topHeaderStyle}/>
      <View style={[props.style, styles.headerStyle]}>
        <Text style={[props.textStyle, styles.headerTextStyle]}>{props.title}</Text>
      </View>
    </View>
  )
};

export default Header;