import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CartsPatmentCard from "../components/CartsPaymentCard";
import { cartDetail } from "../utils/dummyData";
import CustomButton from "../components/CustomButton";
import { colors, sizes, windowHeight, windowWidth } from "../utils/utils";
import AntDesign from 'react-native-vector-icons/AntDesign';
import PaymentReciptCard from "../components/PaymentReciptCard";

const PaymentScreen = () => {
    const [isCheckOut, setIsCheckOut] = useState(false)
    const [isPayment, setIsPayment] = useState(false)
    const [userdata, setUserData] = useState({
        nameOfBank: "",
        Pin: "",
    });

    return (
        <View style={styles.container}>
            {isPayment 
            ?
                <PaymentReciptCard />
                :
                <>
                    {cartDetail.map((item) => {
                        return (
                            <>
                                <CartsPatmentCard
                                    price={item.price}
                                    name={item.name}
                                    totalPrice={item.totalNumber}
                                    imgUrl={item.image}
                                    totalPair={item.price * item.number}
                                />
                            </>
                        )
                    })
                    }
                    {!isCheckOut
                        ?
                        <CustomButton style={styles.button} textColor={colors.black} btnLabel="CHECK OUT"
                            Press={() => { setIsCheckOut(!isCheckOut) }}
                        />
                        :
                        <>
                            <View style={styles.paymentContainer}>
                                <View style={styles.seccontainer}>
                                    <Text style={styles.name}>Select Payment Methos </Text>
                                    <AntDesign
                                        onPress={() => { setIsCheckOut(!isCheckOut) }}
                                        name="closecircleo"
                                        size={24}
                                        color={'#000'}
                                        resizeMode="contain"
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text>Name Of Bank</Text>
                                    <TextInput
                                        autoCapitalize="words"
                                        style={styles.textBox}
                                        placeholder={'Bank Name Here'}
                                        placeholderTextColor={colors.black}
                                        onChangeText={(e) => {
                                            setUserData({ ...userdata, nameOfBank: e });
                                        }}

                                        value={userdata?.nameOfBank}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text>Otp Pin</Text>
                                    <TextInput
                                        autoCapitalize="words"
                                        style={styles.textBox}
                                        placeholder={'Otp Here'}
                                        placeholderTextColor={colors.black}
                                        onChangeText={(e) => {
                                            setUserData({ ...userdata, Pin: e });
                                        }}
                                        keyboardType="number-pad"
                                        value={userdata?.Pin}
                                    />
                                </View>
                                <CustomButton style={styles.button} textColor={colors.black} btnLabel="CHECK OUT"
                                Press={() => { setIsPayment(!isPayment) }}
                                />
                            </View>
                        </>
                    }
                </>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
        flex: 1
    },
    button: {
        marginTop: '6%',
        marginBottom: '6%',
        width: '100%',
        backgroundColor: colors.white,
    },
    paymentContainer: {
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
    seccontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        paddingBottom: 2,
    },
    inputContainer: {
        marginTop: '2%',
        marginBottom: '2%'
    },
    textBox: {
        paddingLeft: 8,
        borderWidth: 1,
        borderColor: colors.black,
        fontSize: sizes.m11,
        borderRadius: 8,
        fontWeight: '600',
        height: windowHeight * 0.05
    },
});
export default PaymentScreen;