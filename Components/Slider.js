import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";
import Swiper from "react-native-swiper/src";

var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1, 
       
    },
    slider: {
        width: width,
        alignItems: "center",
        marginTop: 10,
    },
    imageSlider : {
        height : 200,
        width : width - 10,
        borderRadius : 12,
        marginHorizontal : 10,
        marginBottom : 10

    },
    sliderText : {
        fontSize : 18,
        margin : 16,
        textTransform : "uppercase",
        fontWeight : "900",
    } 


})

const Slider = () => {
    const [swiperImages, setSwiperImages] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setSwiperImages(data);
            })
            .catch(err => console.log(err));
        return () => {
            setSwiperImages([]);
        }
    }, []);
    return  <View style={styles.container}>
            <Text style={styles.sliderText}>Top Products</Text>
            <View style={styles.slider}>
                <Swiper
                style={{height : width / 1.5}}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={2}
                    showsPagination={true}
                >
                    {swiperImages.length > 0 && swiperImages.map((image,i )=> {
                        if(i > 4){
                            return;
                        }
                        return (
                    <Image style={styles.imageSlider} key={i}
                        source={{ uri: image.image }}
                        resizeMode="contain" />              
                        )
                    })}
                </Swiper>
                <View style={{ height: 40 }} ></View>
            </View>
        </View>
    

}

export default Slider;

