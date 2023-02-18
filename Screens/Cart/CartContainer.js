import Icon from "react-native-vector-icons/FontAwesome"

import { Text, View, Dimensions, Image, StyleSheet, FlatList,
    ScrollView, Pressable, Button } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../Redux/Actions/cartActions";
import { Badge } from "native-base";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        borderColor: "gainsboro",
        borderWidth: 1,
        padding: 8,
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: "column",
        justifyContent: "space-between"


    },

    item: {
        display: "flex",
        flexDirection: "row",

    },
    details: {

        width: width * 0.6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    image: {
        width: width * 0.3,
        marginRight: 10,
        height: width * 0.2,


    },
    title: {
        fontSize: 16
    },
    price: {
        fontWeight: "900",
        fontSize: 18,
        color: "palevioletred"
    },
    delete: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'


    },
    quantity: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    quantityNumber: {
        fontSize: 16,
        margin: 20
    },

    deleteQuantity: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    quantitySymbol: {
        fontSize: 16,
        padding: 14,
        backgroundColor: "palevioletred",
        color: "white",
        borderRadius: 10
    },
    bottomContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: width,
        padding: 10,
        backgroundColor: "white",
        paddingVertical: 10,
        alignItems : 'center'
    }

})

const Cart = (props) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    const increaseItemQuantity = (product, quantity) => {
        dispatch(addToCart(product, quantity + 1));
    }
    const reduceItemQuantity = (product, quantity) => {
        if (quantity === 1) return;
        dispatch(addToCart(product, quantity - 1));
    }

    const deleteCartItem = (productId) =>{
        dispatch(removeFromCart(productId));
    }

    const clearAll = () =>{
        dispatch(clearCart());
    }


    return <View style={{display : "relative", height :"100%",  }}>
       <View style={{display : "relative",marginBottom : 60,}}>

      
        {cartItems.length === 0 ?
         <View style={{ display: "flex", height: "100%",justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>No Item Added To Cart</Text>
        </View> :
            <FlatList
                key={'#'}
                vertical

                data={cartItems}
                renderItem={({ item }) => {
                    return <Pressable onPress={() => props.navigation.navigate("ProductDetail", { item })} style={styles.itemContainer}>

                        <View style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.image}></Image>
                            <View style={styles.details}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>

                        </View>
                        <View style={styles.deleteQuantity}>
                            <Pressable style={styles.delete} onPress={() => deleteCartItem(item.id)}>
                                <Icon style={{ fontSize: 25, marginRight: 10, color: "palevioletred" }} name="trash"></Icon>
                                <Text style={{ fontSize: 16, marginRight: 10, color: "palevioletred" }}>REMOVE</Text>
                            </Pressable>

                            <View style={styles.quantity}>
                                <Icon style={styles.quantitySymbol} onPress={() => reduceItemQuantity(item, item.quantity)} name="minus"></Icon>
                                <Text style={styles.quantityNumber}>{item.quantity}</Text>
                                <Pressable onPress={() => increaseItemQuantity(item, item.quantity)}>
                                    <Icon style={styles.quantitySymbol} name="plus"></Icon>
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>
                }}
                keyExtractor={item => item.id}
            />

        }
 </View>
        <View style={styles.bottomContainer}>

            <Text style={styles.price}>₦{(cartItems.reduce((a, c) => a + c.quantity * c.price, 0)).toFixed(2) }</Text>
            <Pressable  onPress={clearAll}>
              <Badge color={"white"} style={{backgroundColor :"red", color : "white",
            borderRadius : 6, fontSize : 15}}>
                <Text style={{color : "white", fontSize : 18,padding : 3}}>Clear</Text>
                </Badge>  
            </Pressable>
            <Button title="Checkout" />
        </View>
    </View>

};



export default Cart;