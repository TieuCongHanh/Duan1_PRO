import { ActivityIndicator, Button, FlatList, Image, Text, View ,TouchableOpacity} from "react-native"
import React, { useState } from "react";
const ShowClass = (props) => {
    const [isLoading, setisLoading] = useState(true);
    const [dscl, setdsscl] = useState([]);

    //viết hàm load cl

    const getList = async () => {
        let url_api = "http://192.168.0.106:3000/class";
        try {
            const response = await fetch(
                url_api
            );
            const json = await response.json();
            //đổ dữ liệu vào state
            setdsscl(json);
        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);//trạng thái đã load xong
        }
    }

    const render = (row) => {
        const xoaSp = () => {
            let url_api = "http://192.168.0.106:3000/class/" + row.item.id;
               
            fetch(url_api, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                
            })
                .then((res) => {
                    if (res.status == 200){
                        alert('Xóa thành công');
                        getList();
                    }
                        

                }).catch((err) => {
                    console.log(err);
                });
        }
        console.log(row);
        return (
            <View style={{borderWidth: 1, marginBottom: 20, backgroundColor: '#fff'}}>
                {/* thông tin 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 600, height: 100, borderBottomWidth: 2 }}>
                    <View style={{ width: 450, flexDirection:'row' , justifyContent:'center',alignItems:'center'}}>
                    <Text style={{ fontSize: 30 ,width:70, paddingLeft:10}}>{row.item.id}</Text>
                        <Text style={{ fontSize: 30,width:120 }}> {row.item.maClass}</Text>
                        <Text style={{ fontSize: 30,width:250 }}>{row.item.tenClass}</Text>
                    </View>
    
                    <View style={{ width: 130, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{justifyContent:'center'}} onPress={xoaSp}>
                            <Image style={{ width: 50, height: 50 }} source={require('../images/delete.png')} />
                        </TouchableOpacity>
    
                        <TouchableOpacity style={{justifyContent:'center'}} onPress={() => {props.navigation.navigate('UpdateClas', {item_sp: row.item})}}>
                            <Image style={{ width: 47, height: 47, marginRight: 20 }} source={require('../images/pen.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                </View>
        )
    }
    //gọi hàm load dữ liệu
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // do something
            getList();//gọi hàm load dữ liệu
        });
        return unsubscribe;
    }, [props.navigation]);

    return (
        <View style={{backgroundColor:'lightblue', alignItems:'center'}}>
        
<View style={{flexDirection:'row' , height:80, alignItems:'center', backgroundColor:'lightblue'}}>
<View style={{marginLeft:-260}}><Text style={{fontSize:30 , fontWeight:'bold'}}>ID</Text></View>
  <View style={{marginLeft:40}}><Text style={{fontSize:30 , fontWeight:'bold'}}>Mã lớp</Text></View>
  <View style={{marginLeft:60}}><Text style={{fontSize:30 , fontWeight:'bold'}}>Tên Lớp</Text></View>
  </View>
            {
                (isLoading) ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList data={dscl}
                        keyExtractor={(item) => { return item.id }}
                        renderItem={render} />
                )
            }

        </View>
    )

}
export default ShowClass;
