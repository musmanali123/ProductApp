import React from "react";
import { colors, images, sizes, windowWidth } from "../utils/utils";
import { Image, StyleSheet, Text, View } from "react-native";
import { cartDetail } from "../utils/dummyData";

const PaymentReciptCard = () => {
   
const sum = cartDetail.reduce((accumulator, object) => {
    return accumulator + object.number * object.price ;
  }, 0);
       
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardStyle}>
                <Image source={images.thanks} style={styles.img} />
                <Text style={styles.textStyle}>{`$ ${sum} has been Paid by your account`}</Text>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: windowWidth/2,
        padding: 11,
        paddingVertical:'10%',
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderRadius: sizes.m15,
        width: windowWidth * 0.93,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 12,
    },

    cardStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '600',
    },

    textStyle1: {
        color: colors.blue,
        fontSize: sizes.m15,
        fontWeight: '600',
    },
    img: {
        width: windowWidth * 0.5,
        height: windowWidth * 0.5,
        resizeMode: 'contain',
        borderRadius: 9,
        marginBottom: '3%'
    }
});


export default PaymentReciptCard;