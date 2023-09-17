import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, windowHeight } from "../utils/utils";
import { sizeNumber } from "../utils/dummyData";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ProductDetailScreen = ({ route }) => {
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.secContainer}>
                <AntDesign
                    onPress={() => { navigation.goBack() }}
                    name="back"
                    size={24}
                    color={'#000'}
                    resizeMode="contain"
                />
                <Text style={styles.text}>Detail</Text>
                <AntDesign
                    name="hearto"
                    size={24}
                    color={'#000'}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.imgContainer}>
                <Image style={styles.img} source={route.params?.item?.productImage} />
            </View>

            <View style={styles.prodctIntro}>
                <View>
                    <Text style={styles.name}>{route.params?.item?.title}</Text>
                    <Text style={styles.available}>{route.params?.item?.available}</Text>
                </View>
                <View style={styles.rating}>
                    <AntDesign
                        // onPress={}
                        name="star"
                        size={24}
                        color={'#FBBE21'}
                        resizeMode="contain"
                    />
                    <Text style={{ marginLeft: 2 }}>4.8 (230)</Text>
                </View>
            </View>
            <View style={styles.divider}></View>
            <Text style={styles.name}>Description</Text>
            <Text>
                <Text style={styles.details}>{route.params?.item?.details}... </Text>
                <Text style={{ color: colors.blue, fontWeight: '800' }}>See More</Text>
            </Text>

            <Text style={styles.name}>Sizes</Text>
            <View style={styles.sizeContainer}>
                {sizeNumber.map((item) => {
                    return (
                        <View style={styles.sizeClr}>
                            <Text style={styles.sizeClr1}>{item}</Text>
                        </View>
                    )
                })

                }
            </View>
            <View style={styles.divider}></View>
            <View style={styles.btnContainer}>
                <View >
                    <Text style={styles.name}>$ {route.params?.item?.price}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.sizeClr1}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: windowHeight * 0.08,
        marginHorizontal: '10%'
    },
    secContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        letterSpacing: 1,
        color: colors.black
    },
    imgContainer: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: windowHeight * 0.4,
        height: windowHeight * 0.3,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    prodctIntro: {
        marginTop: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        paddingBottom: 2,
    },
    available: {
        fontSize: 14,
        color: colors.blue
    },
    details: {
        fontSize: 13,
        fontWeight: "400",
        color: colors.black,
        textAlign: 'justify'
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    divider: {
        width: windowHeight * 0.38,
        borderColor: colors.blue1,
        borderWidth: 1,
        opacity: 0.2,
        marginTop: 10,
        marginBottom: 10
    },
    sizeClr: {
        width: 100,
        height: 40,
        backgroundColor: colors.blue1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 2
    },
    sizeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    sizeClr1: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.white
    },
    btn: {
        width: windowHeight * 0.21,
        height: windowHeight * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue,
        borderRadius: 8,

    }
});
export default ProductDetailScreen