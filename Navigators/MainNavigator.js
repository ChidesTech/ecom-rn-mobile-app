import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import { Badge } from "native-base";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    cartCount :{
        position : "absolute",
        right : -23,
        top : -1,
        backgroundColor : "palevioletred",
        color : "white",
        borderRadius : 10,
        borderColor : "white",
        borderWidth : 1,
        borderStyle : "solid"
       
        
    }
})


const Tab = createBottomTabNavigator();


const MainNavigator = () => {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                keyboardHidesTabBar: true,
                showLabel: true,
                tabBarActiveTintColor: "palevioletred"
            }}
        >


            <Tab.Screen name="Home"
                 component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" style={{ position: "relative" }} color={color} size={30} />
                    )
                }} />
            <Tab.Screen name="Cart"
                component={ CartNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{display : "flex", flexDirection :"row", alignItems : "center"}}>
                        <Icon name="shopping-cart" style={{ position: "relative" }} color={color} size={30} />
                     {cartItems.length > 0 &&  <Badge style={styles.cartCount}>
                         <Text style={{color : "white"}}>{cartItems.length}</Text>
                         </Badge> }   
                        </View>
                    )
                }} />
            <Tab.Screen name="Admin"
                component={ HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="cog" style={{ position: "relative" }} color={color} size={30} />
                    )
                }} />
            <Tab.Screen name="Profile"
                component={ HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" style={{ position: "relative" }} color={color} size={30} />
                    )
                }} />


        </Tab.Navigator>
    )
}


export default MainNavigator;