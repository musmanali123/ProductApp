import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "../components/Input";
import { colors, images, sizes, windowHeight } from "../utils/utils";
import CustomButton from "../components/CustomButton";

const UserInfoScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        adress: "",
    });

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.container}>
            <Text style={styles.heading}>User Information Section</Text>
            <View style={styles.imgContainer}>
                <Image source={images.info2} style={styles.img} />
            </View>
            <View style={styles.inputContainer}>
                <Text>First Name</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite First Name Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setUserInfo({ ...userInfo, firstName: e });
                    }}

                    value={userInfo?.firstName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Last Name</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Last Name Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setUserInfo({ ...userInfo, lastName: e });
                    }}
                    value={userInfo?.lastName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Phone Number</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Phone Number Here'}
                    placeholderTextColor={colors.black}
                    keyboardType={'number-pad'}
                    onChangeText={(e) => {
                        setUserInfo({ ...userInfo, phoneNumber: e });
                    }}
                    value={userInfo?.phoneNumber}

                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Adress</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Adress Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setUserInfo({ ...userInfo, adress: e });
                    }}
                    value={userInfo?.adress}

                />
            </View>
            <View>
                <View style={{ marginVertical: 20 }}>
                    <CustomButton style={styles.button} textColor={colors.black} btnLabel="Go Next"
                    Press={() => {navigation.navigate('userWorkInfo',{data:userInfo})}}
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


export default UserInfoScreen;