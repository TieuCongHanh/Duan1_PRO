import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function TinhTong() {
    const [a, SetA] = useState("")
    const [b, SetB] = useState("")
    const [result, SetResult] = useState(0)
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: '#000',
                    fontSize: 32,
                    alignItems:'center',
                    justifyContent:'center',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginBottom: 10,
                }}>
                TinhTong
            </Text>
            <TextInput
                onChangeText={(text) => { SetA(text) }}
                placeholder='So A'
                value={a}
                style={{
                    backgroundColor: '#ccc',
                    padding: 10,
                    width:450,
                    marginLeft:50,
                    borderRadius: 10,
                    marginBottom: 20,
                    fontSize: 30
                }}
            ></TextInput>
            <TextInput
                onChangeText={(text) => { SetB(text) }}
                placeholder='So B'
                value={b}
                style={{
                    backgroundColor: '#ccc',
                    width:450,
                    padding: 10,
                    marginLeft:50,
                    borderRadius: 10,
                    marginBottom: 10,
                    fontSize: 30
                }}
            ></TextInput>
            <View
                style={{ 
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 10 
                    }}>
                <TouchableOpacity
                    onPress={() => {
                        SetResult(
                            Number(a) + Number(b)
                        )
                    }}
                    style={{
                        padding: 20,
                        backgroundColor: 'lightblue',
                        marginEnd: 20,
                        borderRadius: 10
                    }}>
                    <Text style={{color: '#fff', fontWeight: 'bold',width:150}}>Tính</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        SetA('')
                        SetB('')
                        SetResult(0)
                    }}
                    style={{
                        padding: 20,
                        backgroundColor: 'red',
                        alignSelf: 'flex-end',
                        borderRadius: 10
                    }}>
                    <Text style={{color: '#fff', fontWeight: 'bold', width:150}}>Cancle</Text>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    marginTop: 20,
                    alignSelf: 'center',
                    color: '#000',
                    fontSize: 28,
                    fontWeight: 'bold',
                }}>
                Tổng: {result}
</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 32,
    }
})