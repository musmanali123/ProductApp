import React from "react";
import ProductCards from "../components/PrductCards";
import { ScrollView } from "react-native-gesture-handler";
import { productData } from "../utils/dummyData";
import { Pressable, StyleSheet, View } from "react-native";

const ProductScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.productConatiner}>
                {productData.map((item) => {
                    return (
                        <Pressable
                            onPress={() => { navigation.navigate('ProductDetails', { item: item }) }}
                        >
                            <ProductCards
                                imageName={item.productImage}
                                Price={item.price}
                                Name={item.title}
                                Avaialable={item.available}
                            />
                        </Pressable>
                    )
                })

                }
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    productConatiner: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginHorizontal: 6,
    }

});
export default ProductScreen;