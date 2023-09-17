import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, images, sizes, windowHeight } from "../utils/utils";
import CustomButton from "../components/CustomButton";

const ContactInfoScreen = ({route,navigation}) => {
    const [userContact, setuserContact] = useState({
        email: "",
        whatsUpNumber: "",
        faxNumber: "",
        anyOtherAdress: "",
        data:route?.params?.data

    });

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.container}>
            <Text style={styles.heading}>Contact Information Section</Text>
            <View style={styles.imgContainer}>
                <Image source={images.info3} style={styles.img} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Email Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setuserContact({ ...userContact, email: e });
                    }}
                    keyboardType="email-address"
                    value={userContact?.email}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>whats-app Number</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite whats app number Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setuserContact({ ...userContact, whatsUpNumber: e });
                    }}
                    keyboardType="phone-pad"
                    value={userContact?.whatsUpNumber}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Fax Number</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Fax Number Here'}
                    placeholderTextColor={colors.black}
                    keyboardType={'number-pad'}
                    onChangeText={(e) => {
                        setuserContact({ ...userContact, faxNumber: e });
                    }}
                    value={userContact?.faxNumber}

                />
            </View>
            <View style={styles.inputContainer}>
                <Text>AnyOther Address</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Anyother Adress Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setuserContact({ ...userContact, anyOtherAdress: e });
                    }}
                    value={userContact?.anyOtherAdress}

                />
            </View>
            <View>
                <View style={{ marginVertical: 20 }}>
                    <CustomButton style={styles.button} textColor={colors.black} btnLabel="Go Next"
                    Press={() => {navigation.navigate('userDetails',{data:userContact})}}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
        flex: 1
    },
    heading: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '800',
        marginTop: '5%'
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
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '8%',
    },
    img: {
        width: windowHeight * 0.4,
        height: windowHeight * 0.3,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    inputContainer: {
        marginTop: '2%',
        marginBottom: '2%'
    },
    button: {
        width: '100%',
        backgroundColor: colors.white,
    }
});


export default ContactInfoScreen;