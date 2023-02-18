import { SafeAreaView, Image, StyleSheet , Text} from "react-native";

const Header = () =>{
return <SafeAreaView style={styles.header}>
    {/* <Image source={{uri : "https://cdn.pixabay.com/photo/2021/07/10/15/45/online-shop-6401739__340.png"}}
    resizeMode="contain" style={styles.image}
    /> */}
   <Text style={{margin : 20, fontSize : 20, fontWeight : "900",  textTransform : "uppercase", color : "white"}}>Chidestore Mobile</Text>
   
   
</SafeAreaView>
}

const styles = StyleSheet.create({
    header : {
     display : "flex",
     justifyContent : "center",
     flexDirection : "column",
     paddingTop : 20,
     alignItems : "center",
     backgroundColor : "palevioletred"
     
    },
   view: {
     display : "flex",
     justifyContent : "space-between",
     backgroundColor : "palevioletred",
     flexDirection : "row",
     padding : 10
     
    },
    image : {
        height : 50,
        width : 50,
        marginBottom : 15
        
        
    },
    text : {
        fontSize : 26,
        fontWeight : "600",
        marginBottom : 15,

    },
    textInput : {
        borderColor : "white",
        borderWidth : 1,
        flex : 2,
        color : "white",
        // marginBottom : 20,
        padding : 10,
        borderRadius : 10,
        backgroundColor : "white",
        fontSize : 16
    }
})
export default Header;