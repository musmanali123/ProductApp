import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InputPassword from '../components/InputPassword';
import Input from '../components/Input';
import { colors, sizes, windowHeight, windowWidth } from '../utils/utils';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={{ marginTop: '12%' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.headerText}>LOG IN</Text>
          </View>
        </View>

        <View>
          <Text style={styles.inputText}>Username / Email</Text>
          <Input
            placeholderText="Enter Your Username / Email"
          />
        </View>

        <View style={{ marginTop: 20 }}>
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

        <View style={styles.passContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {
            alert('The feature is not ready yet')
          }}>
            <Text style={styles.passText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 30 }}>
          <CustomButton style={styles.button} textColor="white" btnLabel="LOG IN"
          // Press={() => {navigation.navigate('Home')}}
          />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account ? </Text>

          <TouchableOpacity onPress={() => {
            navigation.navigate('SignUp');
          }}>
            <Text style={styles.footerText1}>Signup</Text>
          </TouchableOpacity>
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
    height: windowHeight * 0.17,
    width: windowWidth * 0.93,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: '18%',
  },

  headerText: {
    color: colors.black,
    fontSize: sizes.m25,
    marginBottom: 30,
  },

  footerContainer: {
    marginTop: windowHeight * 0.02,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8
  },

  footerText: {
    fontSize: sizes.m16,
    fontWeight: '600',
  },

  footerText1: {
    fontWeight: '600',
    fontSize: sizes.m16,
  },

  inputText: {
    fontSize: sizes.m15,
    marginHorizontal: 20,
    marginBottom: 7,
  },

  passContainer: {
    alignSelf: 'flex-end',
    marginHorizontal: 17,
    marginTop: 7,
  },

  passText: {
    fontWeight: '600',
    fontSize: sizes.m15,
  },
});

export default LoginScreen;
