import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import DiaLogUpdate from './DiaLogUpdate'
import DiaLogDelete from './DiaLogDelete'
// import LinearGradient from 'react-native-linear-gradient';
const ShowTT = () => {
    //  đặt biến cho dialog delete và sử lý sự kiện
    const [ShowDELETE, SetShowDELETE] = useState(false);
    const onClick = () => {
        SetShowDELETE(true);
    }
    const onHin = () => {
        SetShowDELETE(false);
    }
    

    // dặt biến cho dialog update và sử lý sự kiện
    const [ShowUPDATE, SetShowUPDATE] = useState(false);
    const Clickon = () => {
        SetShowUPDATE(true)
    }
    const Hinon = () => {
        SetShowUPDATE(false)
    }

    // axios({

    // })
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <DiaLogDelete visible={ShowDELETE} onHide={onHin} />
            <DiaLogUpdate visible={ShowUPDATE} onHide={Hinon} />
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>DANH SÁCH</Text>

            {/* thông tin 1 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 600, marginTop: 30, height: 100, borderBottomWidth: 2 }}>
                <View style={{ width: 450, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Tiêu Công Hạnh</Text>
                    <Text style={{ fontSize: 20, paddingTop: 10 }}>2003</Text>
                </View>

                <View style={{ width: 130, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onClick}>
                        <Image style={{ width: 50, height: 50 }} source={require('../images/delete.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Clickon}>
                        <Image style={{ width: 47, height: 47, marginRight: 20 }} source={require('../images/pen.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* thông tin 2 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 600, marginTop: 30, height: 100, borderBottomWidth: 2 }}>
                <View style={{ width: 450, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Nguyễn Đức Hùng</Text>
                    <Text style={{ fontSize: 20, paddingTop: 10 }}>2003</Text>
                </View>

                <View style={{ width: 130, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onClick}>
                        <Image style={{ width: 50, height: 50 }} source={require('../images/delete.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Clickon}>
                        <Image style={{ width: 47, height: 47, marginRight: 20 }} source={require('../images/pen.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* thông tin 3 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 600, marginTop: 30, height: 100, borderBottomWidth: 2 }}>
                <View style={{ width: 450, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Nguyễn Duẫn Đạt</Text>
                    <Text style={{ fontSize: 20, paddingTop: 10 }}>2002</Text>
                </View>

                <View style={{ width: 130, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onClick}>
                        <Image style={{ width: 50, height: 50 }} source={require('../images/delete.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Clickon}>
                        <Image style={{ width: 47, height: 47, marginRight: 20 }} source={require('../images/pen.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* thông tin 4 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 600, marginTop: 30, height: 100, borderBottomWidth: 2 }}>
                <View style={{ width: 450, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Bùi Văn Ánh</Text>
                    <Text style={{ fontSize: 20, paddingTop: 10 }}>2003</Text>
                </View>

                <View style={{ width: 130, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onClick}>
                        <Image style={{ width: 50, height: 50 }} source={require('../images/delete.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Clickon}>
                        <Image style={{ width: 47, height: 47, marginRight: 20 }} source={require('../images/pen.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* thông tin 5 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 600, marginTop: 30, height: 100, borderBottomWidth: 2 }}>
                <View style={{ width: 450, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Dương Quang Thiện</Text>
                    <Text style={{ fontSize: 20, paddingTop: 10 }}>2003</Text>
                </View>

                <View style={{ width: 130, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onClick}>
                        <Image style={{ width: 50, height: 50 }} source={require('../images/delete.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Clickon}>
                        <Image style={{ width: 47, height: 47, marginRight: 20 }} source={require('../images/pen.png')} />
                    </TouchableOpacity>

                </View>
            </View>


        </View>
    )
}

export default ShowTT