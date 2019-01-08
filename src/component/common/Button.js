import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from "../../config/styles";
import Global from "../../config/Global";

export default Button = (props) => {
  return(
    <TouchableOpacity onPress={() => props.onPress()} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
};