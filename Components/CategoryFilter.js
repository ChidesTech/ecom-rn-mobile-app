import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    badge : {
        backgroundColor : "palevioletred",
        borderWidth : 1,
        borderColor: "white",
        marginRight : 8,
        borderRadius : 8
    },
    text : {
        color : "white",
        paddingVertical : 15,
        paddingHorizontal : 16,
        fontSize : 18,
        textTransform : "capitalize"
      
    }
})
export default function CategoryFilter({categories}){
    return <ScrollView bounces={true} horizontal={true}>
       <View style={{display : "flex", flexDirection : "row", padding : 1}}>      
       {categories && categories.map(category => {
    return <Pressable key={category} style={styles.badge}>
       <Text style={styles.text}>{category}</Text>
     </Pressable>
       })} 
       </View>

    </ScrollView>
}



