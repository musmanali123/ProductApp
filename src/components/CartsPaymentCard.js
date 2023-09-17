import { Image, StyleSheet, Text, View } from "react-native"
import { colors, images, sizes, windowWidth } from "../utils/utils";

const CartsPatmentCard = ({name,price,imgUrl,totalPair,totalPrice}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardStyle}>
                <View>
                    <Text style={styles.textStyle}>{name}</Text>
                    <Text style={styles.textStyle1}>{price}</Text>
                    <Text style={styles.textStyle1}>{totalPrice}</Text>
                </View>
                <Text style={styles.textStyle}>{`Total $ ${totalPair}`}</Text>
                <Image source={imgUrl} style={styles.img} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: '4%',
        padding: 11,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 9
    }
});

export default CartsPatmentCard;