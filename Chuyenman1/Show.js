import { ActivityIndicator, Button, FlatList, Image, Text, View ,TouchableOpacity} from "react-native"
import React, { useState } from "react";
const ListProduct = (props) => {
    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]);

    //viết hàm load sp

    const getListPro = async () => {
        let url_api = "http://10.24.4.91:3000/posts";
        try {
            const response = await fetch(
                url_api
            );
            const json = await response.json();
            //đổ dữ liệu vào state
            setdssp(json);
        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);//trạng thái đã load xong
        }
    }

    const renderProduct = (row) => {
        const xoaSp = () => {
            let url_api = "http://10.24.4.91:3000/posts/" + row.item.id;
               
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
                        getListPro();
                    }
                        

                }).catch((err) => {
                    console.log(err);
                });
        }
        console.log(row);
        return (
            <View style={{borderWidth: 1, marginBottom: 20, backgroundColor: '#fff'}}>
                {/* thông tin 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 600, marginTop: 30, height: 100, borderBottomWidth: 2 }}>
                    <View style={{ width: 450, paddingLeft: 20 }}>
                        <Text style={{ fontSize: 20 }}>Tên : {row.item.name}</Text>
                        <Text style={{ fontSize: 20, paddingTop: 10 }}>Tuoi : {row.item.old}</Text>
                    </View>
    
                    <View style={{ width: 130, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={xoaSp}>
                            <Image style={{ width: 50, height: 50 }} source={require('../images/delete.png')} />
                        </TouchableOpacity>
    
                        <TouchableOpacity onPress={() => {props.navigation.navigate('UpdateProduct', {item_sp: row.item})}}>
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
            getListPro();//gọi hàm load dữ liệu
        });

        return unsubscribe;
    }, [props.navigation]);

    return (
        <View style={{backgroundColor:'yellow', alignItems:'center'}}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>DANH SÁCH</Text>
            {
                (isLoading) ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList data={dssp}
                        keyExtractor={(item) => { return item.id }}
                        renderItem={renderProduct} />
                )
            }

        </View>
    )

}
export default ListProduct;