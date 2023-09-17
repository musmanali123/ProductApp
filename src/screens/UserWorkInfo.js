import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, images, sizes, windowHeight } from "../utils/utils";
import CustomButton from "../components/CustomButton";

const UserWorkInfo = ({route,navigation}) => {
    const [userWorkInfo, setUserWorkInfo] = useState({
        nautreOfWork: "",
        Experience: "",
        addreess: "",
        city: "",
        firstName: route?.params?.data?.firstName,
        lastName: route?.params?.data?.lastName,
        phoneNumber:route?.params?.data?.phoneNumber,
        adress:route?.params?.data?.adress,
        // userInfo:route?.params?.data

    });


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.container}>
            <Text style={styles.heading}>Work Information Section</Text>
            <View style={styles.imgContainer}>
                <Image source={images.info1} style={styles.img} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Nature Of Work</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Nature Of Work Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setUserWorkInfo({ ...userWorkInfo, nautreOfWork: e });
                    }}

                    value={userWorkInfo?.nautreOfWork}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Office Addreess</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Office Addreess Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setUserWorkInfo({ ...userWorkInfo, addreess: e });
                    }}

                    value={userWorkInfo?.addreess}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Total Experience</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Total Experience Here'}
                    placeholderTextColor={colors.black}
                    keyboardType={'number-pad'}
                    onChangeText={(e) => {
                        setUserWorkInfo({ ...userWorkInfo, Experience: e });
                    }}

                    value={userWorkInfo?.Experience}

                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Country or City</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.textBox}
                    placeholder={'Wtite Place Here'}
                    placeholderTextColor={colors.black}
                    onChangeText={(e) => {
                        setUserWorkInfo({ ...userWorkInfo, city: e });
                    }}

                    value={userWorkInfo?.city}

                />
            </View>
            <View>
                <View style={{ marginVertical: 20 }}>
                    <CustomButton style={styles.button} textColor={colors.black} btnLabel="Go Next"
                    Press={() => {navigation.navigate('UserContactInfo',{data:userWorkInfo})}}
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


export default UserWorkInfo;