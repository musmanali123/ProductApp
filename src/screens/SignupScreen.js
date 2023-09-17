import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native';
import Input from '../components/Input';
import InputPassword from '../components/InputPassword';
import { colors, sizes } from '../utils/utils';
import CustomButton from '../components/CustomButton';

const SignupScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                </View>

                <View style={{ marginTop: 25 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headerText}>SIGN UP</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputText}>Name</Text>
                    <Input
                        placeholderText="Enter Your Username / Email"
                    />
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.inputText}>Email</Text>
                        <Input
                            placeholderText="Enter Your Username / Email" />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.inputText}>Password</Text>
                        <InputPassword
                            placeholderText="Enter Your Password"
                            secureTextEntry={true}
                            name={'lock'}
                            size={18}
                            sizeEndIcon={19}
                            isShow={true}
                        />
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.inputText}>Confirm Password</Text>
                        <InputPassword
                            placeholderText="Enter Your Password"
                            secureTextEntry={true}
                            name={'lock'}
                            size={18}
                            sizeEndIcon={19}
                            isShow={true}
                        />
                    </View>
                </View>

                <View style={{ marginTop: '5%', marginBottom: 8 }}>
                    <CustomButton textColor="white" btnLabel="SIGN UP" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    logo: {
        height: 100,
        width: '80%',
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: '15%',
    },

    headerText: {
        color: colors.black,
        fontSize: sizes.m25,
        fontWeight: '600',
        marginBottom: 20,
    },

    footerContainer: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    footerText: {
        fontSize: sizes.m16,
        fontWeight: '600',
        color: colors.black,
    },

    footerText1: {
        fontWeight: '600',
        fontSize: sizes.m16,
        color: colors.black,
    },

    inputText: {
        color: colors.black,
        fontSize: sizes.m15,
        marginHorizontal: 20,
        marginBottom: 7,
    },

    passContainer: {
        alignSelf: 'flex-end',
        marginRight: 12,
        marginTop: 5,
    },

    passText: {
        color: colors.black,
        fontWeight: '600',
        fontSize: sizes.m15,
    },
});

export default SignupScreen;
