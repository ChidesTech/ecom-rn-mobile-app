import { useEffect, useState } from "react";
import { View, StyleSheet,Text, TouchableOpacity, Dimensions, Image, Button, Pressable } from "react-native";
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartActions";

var {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      width : width/2 - 20,
      height : width / 1.7,
      padding : 10,
      borderRadius : 10,
      marginTop : 55,
      marginBottom : 5,
      marginLeft : 10,
      alignItems : "center",
      elevation : 8,
    
    borderColor : "#cccccc",
    borderWidth : 1


    },
    image : {
        width : width / 2 - 20 -10,
        height : width / 2 - 20 - 30,
        backgroundColor : "transparent",
        position : "absolute",
        top : -45,
        borderTopLeftRadius : 15,
    },
    card : {
        marginBottom : 10,
        height : width / 2 - 20 - 90,
        backgroundColor : "transparent",
        width : width / 2 - 20 - 10

    },
    title :{
        fontWeight : "bold",
        fontSize : 14,
        textAlign : "center"
    }, 
    price : {
        fontSize : 20,
        color : "red"
    },
    button : {
        marginTop : 16,
        padding : 8,
        paddingLeft : 16,
        paddingRight : 16,
        backgroundColor : "palevioletred",
        borderRadius : 10,
        
    }
  
   
  });
const ProductCard = (props) => {
const {title, image, price} = props;
const dispatch = useDispatch();

const addItemToCart =(product)=>{
   dispatch(addToCart(product, 1));
}


   return <View style={styles.container}>
    
        <Image resizeMode="contain" style={styles.image} source={{uri : image}}/>
        <View style={styles.card}></View>
        <Text style={styles.title} >{title.length > 15 ? title.substring(0, 15 -3) + " ..." : title}</Text>
        <Text style={styles.price} >${price}</Text>
        <View style={{marginBottom : 60}}>
            <Pressable onPress={() => addItemToCart(props)} style={styles.button}>
                <Text style={{color : "white", fontSize : 16 }}>Add</Text>
            </Pressable>
        </View>
     </View>
}



export default  ProductCard;