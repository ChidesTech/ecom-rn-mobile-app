import { Container, Flex } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Dimensions, Image, Text, View, ScrollView, Button } from "react-native";

var {width, height} = Dimensions.get("window");
export default function ProductDetail(props){
    const styles = StyleSheet.create({
        itemContainer :{
            padding : 6
        },
        title : {
      textAlign : "center",
      fontSize : 20,
      marginTop : 10,
      fontWeight : "700"

        },
        price : {
      textAlign : "center",
      fontSize : 25,
      marginTop : 10,
      color : "palevioletred",
      fontWeight : "900"
        },
        description :{
            textAlign : "center",
      marginTop : 10,

        },
        bottomContainer :{        
            flexDirection :"row", 
            justifyContent :"space-between", 
            position : "absolute",
            bottom : 0,
            left : 0,
            width : width,
            padding : 10,
            backgroundColor : "white",
            paddingVertical : 10,
            alignItems : "center"
        }
       
    });
    const [item, setItem] = useState(props.route.params.item);

    return <View style={{backgroundColor :"white", position : "relative", height :"100%"}} >

        <ScrollView style={styles.itemContainer}>
       <Image source={{uri : item.image}} resizeMode="contain" style={{width : width - 10, height : width/2}}/>
       <Text style={styles.title}>{item.title}</Text>
       <Text style={styles.description}>{item.description}</Text>
        </ScrollView>

        <View style={styles.bottomContainer}>
            
            <Text style={styles.price}>₦{item.price}</Text>
        <Button title="Add"/>
            
       
        </View>

    </View>
}