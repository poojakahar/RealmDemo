import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {add, getAll, removeAll} from "../Query/Person";
import styles from "../config/styles";
import Global from "../config/Global";
import Button from "./common/Button";
import Header from "./common/Header";
import realm from "../Model/index";

let Realm = require('realm');

export default class AddData extends Component {
  constructor(props) {
    super(props);

    const {params} = props.navigation.state;

    this.state = {
      id: params && params.id.toString() || '',
      name: params && params.name || '',
      email: params && params.email || '',
      contactno: params && params.contactno || '',
      photo: params && params.photo || ''
    };
  }

  _onChangeText = (value, key) => {
    this.setState({[key]: value})
  };

  _onAdd = () => {
    let obj = {
      ...this.state,
      id: parseInt(this.state.id)
    };

    add(obj);
    this.clear();
    alert('Added Sucessfully')
  };

  clear = () => {
    let obj = {
      id: '',
      name: '',
      email: '',
      contactno: '',
      photo: ''
    };

    this.setState(obj);
  };

  _onEdit = () => {
    // alert('Hii');
    const {name, contactno, email, photo, id} = this.state;
    let persons = getAll();

    persons.map((p, idx) => {
      if(p.id == id)
      {
        debugger
        realm.write(() => {
          persons[idx].name = name;
          persons[idx].email = email;
          persons[idx].photo = photo;
          persons[idx].contactno = contactno;
        });
      }
    });
    this.clear();
  };

  render() {
    const {id, name, email, contactno, photo} = this.state;
    const {params} = this.props.navigation.state;
    return (
      <View style={{flex: 1}}>
        <Header title={params && params.fromEdit ? 'Edit Details' : 'New Entry'}/>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={[styles.blueInputBox, styles.inputBox]}>
            <TextInput
              placeholder={'ID'}
              value={id}
              onChangeText={(value) => this._onChangeText(value, 'id')}
              style={styles.inputTextFont}
            />
          </View>
          <View style={[styles.redInputBox, styles.inputBox]}>
            <TextInput
              placeholder={'Name'}
              value={name}
              onChangeText={(value) => this._onChangeText(value, 'name')}
              style={styles.inputTextFont}
            />
          </View>
          <View style={[styles.orangeInputBox, styles.inputBox]}>
            <TextInput
              placeholder={'Email ID'}
              value={email}
              onChangeText={(value) => this._onChangeText(value, 'email')}
              style={styles.inputTextFont}
            />
          </View>
          <View style={[styles.yellowInputBox, styles.inputBox]}>
            <TextInput
              placeholder={'Contact No'}
              value={contactno}
              onChangeText={(value) => this._onChangeText(value, 'contactno')}
              style={styles.inputTextFont}
            />
          </View>
          <View style={[styles.limeInputBox, styles.inputBox]}>
            <TextInput
              placeholder={'Url of you photo'}
              value={photo}
              onChangeText={(value) => this._onChangeText(value, 'photo')}
              style={styles.inputTextFont}
            />
          </View>

          <Button onPress={() => params && params.fromEdit ? this._onEdit() : this._onAdd()} title={params && params.fromEdit ? "Edit" : "Add"}/>
        </View>
      </View>
    )
  }
}

AddData.navigationOptions = ({ navigation }) => ({
  title: 'Add',
  headerLeft: null,
  headerRight: null,
  headerTitleStyle: {fontWeight: '400', fontSize: 50, fontFamily: Global.CHALKDUSTER, color: Global.RED, letterSpacing: 1, height: 16},
  headerStyle: {
    backgroundColor: Global.WHITE,
    borderBottomColor: Global.WHITE,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    paddingTop: 35
  },
});