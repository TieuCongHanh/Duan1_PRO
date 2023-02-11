import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Logina from './Logina';
import Indexa from './Indexa';
import AddClass from './AddClass';
import ShowClass from './ShowClass';
import DanhSachClass from './DanhSachClass';



const Stack = createNativeStackNavigator();
function A(){
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
            <Stack.Screen name='Indexa' component={Indexa}/>
            <Stack.Screen name='AddClass' component={AddClass}/>
            <Stack.Screen name='ShowClass' component={ShowClass}/>
            <Stack.Screen name='DanhSachClass' component={DanhSachClass}/>


        </Stack.Navigator>

    );
}
export default class StackScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <A></A>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})