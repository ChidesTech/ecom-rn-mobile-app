import { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, Image, Text } from "react-native";
import { Container, Header, Item, Input, Icon } from "native-base";

var {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container : {display : "flex", flexDirection : "row", marginTop : 16, padding : width * 0.01},
    image : {width : width * 0.2 , height : width / 5, marginRight : width * 0.02},
    texts : {display : "flex", flexDirection:"column", width : width * 0.75}


})
const ProductList = (props) => {
  const {item} = props;
   return <TouchableOpacity>
     <View style={styles.container}>
        <Image style={styles.image} source={{uri : item.image}}/>
        <View style={styles.texts}>
            <Text style={{color : "palevioletred", fontWeight : "900"}}>{item.title}</Text>
            <Text>{item.description.length > 150 ? item.description.substring(0, 150 -3) + " ..." : item.description}</Text>
        </View>
     </View>
   </TouchableOpacity>
}

export default ProductList;