import { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import ProductCard from "./ProductCard";
var {width} = Dimensions.get("window");

const ProductGrid = (props) => {
  const {item} = props;

   return <TouchableOpacity onPress={() => props.navigation.navigate("ProductDetail", {item})} style={{width : "50%", backgroundColor : "white"}}>
     <View style={{width : width / 2}}>
        <ProductCard {...item}/>

     </View>
   </TouchableOpacity>
}

export default ProductGrid;