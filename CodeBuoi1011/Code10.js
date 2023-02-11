import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Top1 from './Top1';
import Top3 from './Top3';
import Top2 from './Top2';



const Stack = createNativeStackNavigator();
function Code10(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown:false}} name="Nhap" component={Top1}/>
         <Stack.Screen name='Top3' component={Top3}/> 
           <Stack.Screen name='Top2' component={Top2}/>
        </Stack.Navigator>
</NavigationContainer>
    );
}



export default Code10;


