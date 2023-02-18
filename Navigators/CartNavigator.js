import {createStackNavigator} from "@react-navigation/stack";
import CartContainer from "../Screens/Cart/CartContainer";


const Stack = createStackNavigator();

export default function CartNavigator(){
    return (
  <Stack.Navigator>
    <Stack.Screen
    name="Cart"
    component={CartContainer}
    options={{
        headerShown : false
    }}

    />
   
  </Stack.Navigator>
    )
}


