import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import ShowData from "./component/ShowData";
import AddData from "./component/AddData";
import Detail from "./component/DeepLinking";

const TabNavigator = createBottomTabNavigator({
  Home: ShowData,
  Add: AddData,
});

const StackNavigator = createStackNavigator({
  Home: TabNavigator,
  Detail: Detail,
});

// export default createAppContainer(TabNavigator);
export default createAppContainer(StackNavigator);