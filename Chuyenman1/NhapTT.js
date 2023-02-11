import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

function NhapTT() {
    const [tenSP, settenSP] = useState('');
    const [Tuoi, setTuoi] = useState('');
 
    const SaveProduct=()=>{
        // tạo obj
        let obSP = {
            name: tenSP,
            old: Tuoi,
         
        }
        // fetch:
        let url_api = "http://10.24.4.91:3000/posts";
       
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
    const navigation = useNavigation();
    const click = () => {
        navigation.navigate('Show');
    }
   
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Nhập thông tin</Text>
            <TextInput  onChangeText={(txt) => { settenSP(txt) }} placeholder='Nhập tên đi bạn, ơ kìa' style={{
                width: 500, height: 60, borderRadius: 5, borderWidth: 1, marginTop: 50, fontSize: 30, paddingLeft: 20
            }}></TextInput>

            <TextInput onChangeText={(txt) => { setTuoi(txt) }} placeholder='Nhập tuổi đi bạn, ơ kìa' style={{
                width: 500, height: 60, borderRadius: 5, borderWidth: 1, marginTop: 30, fontSize: 30, paddingLeft: 20
            }}></TextInput>

            {/* code phần nút bấm */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={SaveProduct} style={{
                    backgroundColor: 'blue',
                    borderWidth: 1,
                    width: 170,
                    height: 60,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50
                }}><Text style={{
                    fontSize: 30,
                    color: 'white',
                    fontWeight: 'bold'
                }}>Save</Text></TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: 'blue',
                    borderWidth: 1,
                    width: 170,
                    height: 60,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50,
                    marginLeft: 70
                }}
                    onPress={click}
                ><Text style={{
                    fontSize: 30,
                    color: 'white',
                    fontWeight: 'bold'
                }}>Show</Text></TouchableOpacity>

            </View>
        </View>
    )
}

export default NhapTT