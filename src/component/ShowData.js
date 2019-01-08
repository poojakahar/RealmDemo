import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Platform,
  Linking,
} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider
} from 'react-native-popup-menu';
import Header from './common/Header';

import {add, getAll, removeAll} from "../Query/Person";
import Global from '../config/Global';
import realm from "../Model/index";

let Realm = require('realm');

export default class ShowData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: []
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => {
    this.navigate(event.url);
  };

  navigate = (url) => {
    const {navigate} = this.props.navigation;

    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    if (routeName === 'Detail') {
      navigate('Detail')
    }
    ;
  };

  componentDidMount() {
    console.log(Realm.defaultPath);
    //removeAll();

    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }

    this._getAll();
  }

  _getAll = () => {
    let p = getAll();
    let newArr = [];
    console.log('Data length: ', p.length);
    if (p.length > 0) {
      p.map((per) => {
        let obj = {
          id: per.id,
          name: per.name,
          email: per.email,
          contactno: per.contactno,
          photo: per.photo,
        };
        newArr.push(obj);
        console.log(per.id + " , " + per.name + " , " + per.email + " , " + per.contactno);
      })
    }

    this.setState({person: newArr});
  };

  _onDelete = (item) => {
    // alert('Hii');
    let persons = getAll();

    persons.map((p, idx) => {
      if(p.id == item.id) {
        realm.write(() => {
          realm.delete(p)
        });
      }
    });
    this._getAll();
  };

  _renderListItem = (item, index) => {
    let defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mcVPHCnnzapjeNHQf-a86OqK5lrSf_p7RCHFwFzdYjVXUwF1fA";
    return (
      <View style={{flex: 1, flexDirection: 'row', margin: 5, padding: 5}} key={index}>
        <View style={{flex: 0.4}}>
          <Image source={{uri: item.photo || defaultImage}} style={{flex: 1}} height={100} width={undefined}/>
        </View>
        <View style={{flex: 0.6, marginLeft: 10}}>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.contactno}</Text>
        </View>
        <View style={{paddingRight: 20}}>
          <MenuProvider>
            {this._renderMenu(item)}
          </MenuProvider>
        </View>
      </View>
    )
  };

  _onEdit = (item) => {
    debugger
    this.props.navigation.navigate('Add', {fromEdit: true, ...item})
  };

  _renderMenu = (item) => {
    return (
      <View>
        <Menu>
          <MenuTrigger text='Select Option' customStyles={{right: 10}}/>
          <MenuOptions>
            <MenuOption onSelect={() => this._onEdit(item)} text='Edit'/>
            <MenuOption onSelect={() => this._onDelete(item)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    )
  };

  _ItemSeparator = () => {
    return (
      <View style={{backgroundColor: Global.BLUE, height: 2, margin: 5}}/>
    )
  };

  render() {
    const {person} = this.state;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <NavigationEvents onWillFocus={payload => this._getAll()}/>
        <Header title={'List'}/>
        {/*
        <ScrollView contentContainerStyle={{height: Global.SCREEN_HEIGHT, width: Global.SCREEN_WIDTH}}>
          {
            person &&
              person.map((item, index) => {
                return(
                  <View style={{flex: 0.2, flexDirection: 'row', backgroundColor: Global.LIME, margin: 5, padding: 5}} key={index}>
                    <View style={{flex: 0.4}}>
                      <Image source={{uri: item.photo}} style={{flex: 1}} height={undefined} width={undefined}/>
                    </View>
                    <View style={{flex: 0.6, marginLeft: 10}}>
                      <Text>{item.id}</Text>
                      <Text>{item.name}</Text>
                      <Text>{item.email}</Text>
                      <Text>{item.contactno}</Text>
                    </View>
                  </View>
                )
              })
          }
        </ScrollView>
*/}

        <FlatList
          data={person}
          renderItem={({item, index}) => this._renderListItem(item, index)}
          ItemSeparatorComponent={this._ItemSeparator}
          style={{height: Global.SCREEN_HEIGHT, width: Global.SCREEN_WIDTH, backgroundColor: Global.WHITE}}
        />

      </View>
    )
  }
}

ShowData.navigationOptions = ({navigation}) => ({
  title: 'Home',
  headerLeft: null,
  headerRight: null,
  headerTitleStyle: {
    fontWeight: '400',
    fontSize: 50,
    fontFamily: Global.CHALKDUSTER,
    color: Global.RED,
    letterSpacing: 1,
    height: 16
  },
  headerStyle: {
    backgroundColor: Global.WHITE,
    borderBottomColor: Global.WHITE,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    paddingTop: 35
  },
});