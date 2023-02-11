import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class DanhSachClass extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 30, marginLeft: 20 }}>Lớp:</Text>
          <TouchableOpacity style={{ backgroundColor: 'red', fontSize: 30, marginRight: 20, width: 350, borderRadius: 5 }}><Text style={{ fontSize: 30, borderRadius: 5 }}>-           Alll               -</Text></TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontSize: 30, marginLeft: 20 }}>Tên Sinh Viên:</Text>
          <TextInput style={{ fontSize: 30, marginRight: 20, width: 350, marginLeft: 20, borderBottomWidth: 1 }} placeholder='Nhập vào tên sinh viên'></TextInput>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontSize: 30, marginLeft: 20 }}>Ngày sinh:</Text>
          <TextInput style={{ fontSize: 30, marginRight: 20, width: 350, marginLeft: 20, borderBottomWidth: 1 }} placeholder='Nhập vào ngày sinh'></TextInput>
        </View>
        <View style={{
          alignItems: 'center'
        }}>
          <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, marginTop: 50, width: 300, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}><Text style={{ fontSize: 25 }}>Thêm Sinh Viên</Text></TouchableOpacity>
        </View>
        <Text style={{borderBottomWidth:1, marginTop:20}}></Text>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <View style={{marginLeft:-50}}><Text style={{fontSize:20 , fontWeight:'bold'}}>STT</Text></View>
        <View style={{marginLeft:130,}}><Text style={{fontSize:20 , fontWeight:'bold'}}>Tên sinh viên</Text></View>
        <View style={{marginLeft:160}}><Text style={{fontSize:20 , fontWeight:'bold'}}>Năm sinh</Text></View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <View style={{marginLeft:-10}}><Text style={{fontSize:20 }}>1</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 }}>Tiêu Công Hạnh</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 }}>  24-07-2003</Text></View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <View style={{justifyContent:'center'}}><Text style={{fontSize:20 }}>2</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 }}>Nguyễn Đức Hùng</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 }}>21-08-2003</Text></View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <View style={{justifyContent:'center'}}><Text style={{fontSize:20 }}>3</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 }}>Nguyễn Đức Hùng</Text></View>
        <View style={{marginLeft:140}}><Text style={{fontSize:20 }}>21-08-2003</Text></View>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({})