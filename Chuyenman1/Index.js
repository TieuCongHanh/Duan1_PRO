import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Nhap from './Nhap';

import ShowTT from './ShowTT';
import NhapTT from './NhapTT';
import ListProduct from './Show';
import UpdateProduct from './DiaLogUpdate';




const Stack = createNativeStackNavigator();
function Index(){
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown:false}} name="Nhap" component={NhapTT}/>
         <Stack.Screen name='ShowTT' component={ShowTT}/> 
           <Stack.Screen name='Show' component={ListProduct}/>
           <Stack.Screen name='UpdateProduct' component={UpdateProduct}/>

        </Stack.Navigator>

    );
}



export default class StackScreen extends Component {
  render() {
    return (
      <NavigationContainer>
      <Index></Index>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
