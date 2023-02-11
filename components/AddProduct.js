import { Button, Text, TextInput, View } from "react-native"
import st from "./style";
import { useState } from "react";
const AddProduct = () =>{
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
    return(
        <View style={st.formAdd}>
            <Text>Thêm sản phẩm</Text>

            <TextInput placeholder="Tên "
                onChangeText={(txt) => { settenSP(txt) }} />
            <TextInput placeholder="Tuoi"
                onChangeText={(txt) => { setTuoi(txt) }}
            />
           
            <Button title="Save" onPress={SaveProduct} />
        </View>
    )
    
}
export default AddProduct;