import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useNavigation } from '@react-navigation/native';
import ListProduct from './components/ListProduct';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import { StyleSheet } from 'react-native';
const App= ()=> {
  return (
    // Bước 3: Định nghĩa Navigation
  //Tình huống 1: App chính chỉ có Nav
    <NavigationContainer>
        <StackDemo.Navigator  initialRouteName='Home'>
          <StackDemo.Screen name='ListProduct' component={ListProduct} options={ {title:'List product'}} />
          <StackDemo.Screen name='AddProduct' component={AddProduct} options={ {title:'Add product'}} />
          <StackDemo.Screen name='UpdateProduct' component={UpdateProduct} options={{title: 'Update product'}}/>
  {/* viết tiếp các màn hình khác vào đây */}
        </StackDemo.Navigator>
    </NavigationContainer>


)

}
const StackDemo = createNativeStackNavigator();

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
