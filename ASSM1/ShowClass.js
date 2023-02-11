import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class ShowClass extends Component {
  render() {
    return (
      <View style={{flex:1}}>

      <View style={{flexDirection:'row',justifyContent:'center'}}>
      <View style={{}}><Text style={{fontSize:20 , fontWeight:'bold'}}>STT</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 , fontWeight:'bold'}}>Mã lớp</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 , fontWeight:'bold'}}>Tên Lớp</Text></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
      <View style={{marginLeft:15}}><Text style={{fontSize:20}}>1</Text></View>
        <View style={{marginLeft:155}}><Text style={{fontSize:20}}>MOB5001</Text></View>
        <View style={{marginLeft:120}}><Text style={{fontSize:20}}>LOP MOBILE 101</Text></View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
      <View style={{marginLeft:15}}><Text style={{fontSize:20}}>2</Text></View>
        <View style={{marginLeft:155}}><Text style={{fontSize:20}}>MOB5002</Text></View>
        <View style={{marginLeft:120}}><Text style={{fontSize:20}}>LOP MOBILE 102</Text></View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
      <View style={{marginLeft:15}}><Text style={{fontSize:20}}>3</Text></View>
        <View style={{marginLeft:155}}><Text style={{fontSize:20}}>MOB5003</Text></View>
        <View style={{marginLeft:120}}><Text style={{fontSize:20}}>LOP MOBILE 103</Text></View>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({})