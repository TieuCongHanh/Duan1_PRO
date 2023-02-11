import { ActivityIndicator, Button, FlatList, Image, Text, View } from "react-native"
import st from "./style";
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
                <Text>Tên : {row.item.name} </Text>
                <Text>Tuoi : {row.item.old}</Text>
                <Button title="Xóa" onPress={xoaSp}/>
                <View style={{marginTop: 15}}/>
                <Button title="Sửa" onPress={() => {props.navigation.navigate('UpdateProduct', {item_sp: row.item})}}/>
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
        <View style={st.khunDSSP}>
            <Text>Danh sách </Text>

            <Button title="Thêm " onPress={() => props.navigation.navigate('AddProduct')}></Button>
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