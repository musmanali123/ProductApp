import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/SignupScreen';
import NavigationHeader from '../components/header';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MapScreen from '../screens/MapScreen';
import WebViewScreen from '../screens/WebViewscreen';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailsScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import UserWorkInfo from '../screens/UserWorkInfo';
import ContactInfoScreen from '../screens/ContactInfoScreen';
import AllUserDetailsScreen from '../screens/AllUserDetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Home'}
                                navigation={navigation}
                                isBack={false}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Login'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="SignUp"
                component={SignupScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Sign Up'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Map'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="Webview"
                component={WebViewScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Websites'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="ProductList"
                component={ProductScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Product Lists'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerShown: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Product Lists'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="UserInfo"
                component={UserInfoScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'User Information'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="userWorkInfo"
                component={UserWorkInfo}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Work Details'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="UserContactInfo"
                component={ContactInfoScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Contact Infrmation'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="userDetails"
                component={AllUserDetailsScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'All Details'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
            <Stack.Screen
                name="paymentScreen"
                component={PaymentScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <NavigationHeader
                                title={'Carts & Payment'}
                                navigation={navigation}
                                isBack={true}
                            />
                        );
                    },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />
        </Stack.Navigator>
    );
}
export default StackNavigation;