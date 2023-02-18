import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Button, ScrollView } from "react-native";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import { Icon, HStack, SearchIcon, Input, CloseIcon } from "native-base";
import Slider from "../../Components/Slider";
import CategoryFilter from "../../Components/CategoryFilter";
const ProductContainer = (props) => {
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [showProductList, setShowProductList] = useState(false);
   const [text, setText] = useState("");
   const [categories, setCategories] = useState([]);
   const [activeCategory, setActiveCategory] = useState(-1);
   const [initialCategoryProducts, setInitialCategoryProducts] = useState([]);

   const filterProducts = (text) => {
      setFilteredProducts(products.filter(x => x.title.includes(text)));
      setShowProductList(true);
   }

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(data => {
            setProducts(data);
            setFilteredProducts(data);
            setInitialCategoryProducts(data)
         })
         .catch(err => console.log(err))

      fetch('https://fakestoreapi.com/products/categories')
         .then(res => res.json())
         .then(data => {
            setCategories(data)

         })
         .catch(err => console.log(err))
      return () => {
         setProducts([]);
         setFilteredProducts([]);
         setInitialCategoryProducts([]);
         setCategories([]);
      }
   }, []);
   return <ScrollView style={{ backgroundColor: "white" }}>
      {/* <HStack space={2} p={1} >
         <Input pt={3.5} pb={3.5} rounded="xl" w="100%" style={styles.textInput} onFocus={() => setShowProductList(true)}
            onBlur={() => setShowProductList(false)} onChangeText={filterProducts}

            InputLeftElement={<SearchIcon size="5" mt="0.5" ml="3" style={{ color: "palevioletred" }} />}
            InputRightElement={<CloseIcon size="3" p="2" mr="3"
               style={{ color: "black", display: `${showProductList ? "inline" : "none"}` }} onPress={() => setShowProductList(false)} />}

            placeholder="Search For Product . . ." onPress={() => setShowProductList(false)} />
      </HStack> */}
      <View>
         {/* <Slider></Slider> */}
         {/* <View style={{ marginBottom: 20 }}>
            <CategoryFilter categories={categories}></CategoryFilter>
         </View> */}
         {!showProductList ? products.length > 0 ? <FlatList
            key={'_'}
            vertical
            numColumns={2}
            data={products}
            renderItem={({ item }) => {
               return <ProductGrid navigation={props.navigation} key={item.title} item={item} />
            }}
            keyExtractor={item => item.title}
         /> : <Text style={{ fontSize: 20, marginLeft: 10 }}>No Products Found</Text> :

            filteredProducts.length > 0 ?
               <FlatList
                  key={'#'}
                  vertical
                  numColumns={1}
                  data={filteredProducts}
                  renderItem={({ item }) => {
                     return <ProductList key={item.image} item={item} />
                  }}
                  keyExtractor={item => item.image}
               /> : <Text style={{ fontSize: 20, marginLeft: 10 }}>No Products Found</Text>
         }


      </View>


   </ScrollView>





}


const styles = StyleSheet.create({
   header: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      paddingTop: 20,
      alignItems: "center",
      backgroundColor: "palevioletred"

   },
   view: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "palevioletred",
      flexDirection: "row",
      padding: 10

   },
   image: {
      height: 50,
      width: 50,
      marginBottom: 15


   },
   text: {
      fontSize: 26,
      fontWeight: "600",
      marginBottom: 15,

   },
   textInput: {
      fontSize: 16,

   }
})

export default ProductContainer;