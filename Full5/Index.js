import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Flatlist from './Flatlist';
import JsonServer from './JsonServer';
import Show5 from './Show5';
import Dodal from './Modal';
import Ialog from './Dialog';
import DropdownComponent from './Dropdown';



const Stack = createNativeStackNavigator();
function Index(){
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown:false}} name="Show5" component={Show5}/>
         <Stack.Screen name='Flatlist' component={Flatlist}/> 
         <Stack.Screen name='Dialog' component={Ialog}/>
         <Stack.Screen name='Modal' component={Dodal}/>
         <Stack.Screen name='Dropdown' component={DropdownComponent}/>
         <Stack.Screen name='JsonServer' component={JsonServer}/>   
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
