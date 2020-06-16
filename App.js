import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat'; 
//import { GiftedChat } from 'react-native-gifted-chat';
 
const Stack = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Chat:{screen:Chat},
  //Screen2:{screen:Screen2},
},
{
  headerMode:'none',
});
 
export default createAppContainer(Stack);
 
