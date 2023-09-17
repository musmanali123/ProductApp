import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import { colors, images, sizes, windowWidth } from "../utils/utils";

const ProductCards = ({Price,imageName,Name,Avaialable}) => {
    return (
        <View style={styles.container}>
            <Image
                source={imageName}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.productName}>
                    {Name}
                </Text>
                <Text style={styles.productAvailable}>
                    {Avaialable}
                </Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>$-{Price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '4%',
        paddingBottom: '4%',
        // padding:11,
        // alignSelf: 'center',
        backgroundColor: colors.primary,
        borderRadius: sizes.m15,
        width: windowWidth * 0.47,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: windowWidth * 0.47,
        height: 150,
        borderRadius: 10,
        borderColor: colors.gray,
        resizeMode: 'contain'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 12
    },
    productName: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.black
    },
    productAvailable: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.blue
    },
    priceContainer:{
        marginLeft: 12,
        marginTop:'8%'
    },
    price:{
        fontSize: 22,
        fontWeight: '800',
        color: colors.black
    }

});
export default ProductCards