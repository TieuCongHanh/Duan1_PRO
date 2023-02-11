import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
const Logina = () => {

    // handle when user input username and password
    const [username, setusername] = useState("")
    const [password, setpassword] = useState('')

    const onChangeUsername = value => {
        setusername(value);
    }
    const onChangeUserword = value => {
        setpassword(value);
    }
    // handle when user click button login
    const onClick = () => {
        console.log('click login',{
            username,
            password,
        })
        if (username.length == 0 || password.length == 0) {
            Alert.alert('phải nhập tài khoản hoặc mật khẩu')
        }
    }
    return (
        <View style={{
            backgroundColor: '#3498D8',
            flex: 1,
        }}>
            <View style={{
                backgroundColor: 'white',
                margin: 10,
                flex: 1,
                borderRadius: 10,
            }}>
                <View style={{
                    flex: 1,
                    marginVertical: 20,
                }}>

                    {/* Header */}
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'black',
                        }}>Login</Text>
                    </View>

                    {/* Body */}
                    <View style={{
                        flex: 6,

                        alignItems: 'center',
                    }}>
                        <View style={{
                            flex: 4,
                            alignItems: 'center'
                        }}>

                            {/* taikhoan */}
                            <TextInput placeholder="nhap vao tk"
                                style={{
                                    width: 350,
                                    height: 45,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    fontSize: 30,
                                    paddingLeft: 15,
                                }}
                                value={username}
                                onChangeText={onChangeUsername}
                            ></TextInput>

                            {/* matkhau */}
                            <TextInput secureTextEntry={true} placeholder="nhap vao mk"
                                style={{
                                    width: 350,
                                    height: 45,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    fontSize: 30,
                                    paddingLeft: 15,
                                    marginTop: 15
                                }}
                                value={password}
                                onChangeText={onChangeUserword}
                            ></TextInput>

                            {/* login */}
                            <TouchableOpacity style={{
                                width: 100,
                                height: 35,
                                borderRadius: 10,
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                backgroundColor: 'lightblue'
                            }} onPress={onClick}><Text>Login</Text></TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 2,
                        }}><Text>Botton</Text></View>
                    </View>

                    {/* Footer*/}
                    <View style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 50,
                        }}>footer</Text>
                    </View>

                </View>

            </View>
        </View>
    );
};
export default Logina;