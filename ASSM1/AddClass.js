import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

function AddClass() {
  const [malop, setmalop] = useState('');
  const [tenlop, settenlop] = useState('');

  const saveClass=()=>{
      // tạo obj
      let obSP = {
        maClass: malop,
        tenClass: tenlop,
       
      }
      // fetch:
      let url_api = "http://10.24.30.53:3000/class";
     
      fetch(url_api, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify (obSP)
        })
        .then ((res)=>{
              if(res.status == 201)
                  alert('Thêm thành công');

        }).catch((err) =>{
          console.log(err);
        });

      }
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center' }}>
      <Text style={{fontSize:50,marginTop:-200,marginBottom:100}}>Thêm Class </Text>
       <TextInput placeholder='nhập vào mã lớp ' 
       style={{
        height:50,
        width:500,
        borderWidth:1,
        borderRadius:10,
        paddingLeft:20,
        fontSize:30
      }}
      value={malop}
      onChangeText={(txt) => {setmalop(txt)}}
      ></TextInput>
      
       <TextInput placeholder='nhập vào tên lớp ' 
       style={{
        height:50,
        width:500,
        borderWidth:1,
        borderRadius:10,
        paddingLeft:20,
        fontSize:30,
        marginTop:50
      }}
      value={tenlop}
      onChangeText={(txt) => {settenlop(txt)}}
      ></TextInput>
<View style={{
  flexDirection:'row',
  marginTop:50}}>
<TouchableOpacity style={{
  marginRight:20,
  borderRadius:20,
  borderWidth:1,
  height:60,
  width:150,
  backgroundColor:'red',
  alignItems:'center',
  justifyContent:'center'
}}
onPress={() =>{
  setmalop('');
  settenlop('')
}}
><Text style={{
  fontSize:30,
  fontWeight:'bold',
  color:'white'
}}>xóa trắng</Text></TouchableOpacity>
<TouchableOpacity style={{
  marginRight:20,
  borderRadius:20,
  borderWidth:1,
  height:60,
  width:150,
  backgroundColor:'lightblue',
  alignItems:'center',
  justifyContent:'center'
}}
onPress={saveClass}
><Text style={{
  fontSize:30,
  fontWeight:'bold',
  color:'white'
}}>Lưu lớp</Text></TouchableOpacity>

</View>

      </View>
    )
}
export default AddClass