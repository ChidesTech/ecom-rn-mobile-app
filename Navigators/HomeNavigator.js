import {createStackNavigator} from "@react-navigation/stack";
import ProductContainer from "../Screens/Product/ProductContainer";
import ProductDetail from "../Screens/Product/ProductDetail";

const Stack = createStackNavigator();

export default function HomeNavigator(){
    return (
  <Stack.Navigator>
    <Stack.Screen
    name="Home"
    component={ProductContainer}
    options={{
        headerShown : false
    }}

    />
    <Stack.Screen
    name="ProductDetail"
    component={ProductDetail}
    options={{
        headerShown : false
    }}

    />
  </Stack.Navigator>
    )
}


