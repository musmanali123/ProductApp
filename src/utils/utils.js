
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export { windowWidth, windowHeight };

export const colors = {
    primary: '#FDF5F4',
    primary1: '#DC2F2B',
    secondary: '#B2BEB5',
    black: '#000',
    white: '#fff',
    gray: '#eee',
    primary1: '#eee',
    blue: '#707cd2',
    yellow: '#FDFD96',
    blue1: '#757ec8'
}

export const sizes = {    
    m1: 1,
    m2: 2,
    m3: 3,
    m5: 5,
    m7: 7,
    m8: 8,
    m10: 10,
    m12: 12,
    m13: 13,
    m14: 14,
    m15: 15,
    m16: 16,
    m18: 18,
    m20: 20,
    m22: 22,
    m25: 25,
    m30: 30,
    m35: 35,
    m40:40,
    m50: 50,
    m60: 60,
    };

export const images = {
    show1:require('../assets/design1.jpg'),
    show2:require('../assets/design2.jpg'),
    show3:require('../assets/design3.jpg'),
    show4:require('../assets/design4.jpg'),
    info1:require('../assets/info1.jpg'),
    info2:require('../assets/info2.jpg'),
    info3:require('../assets/info3.jpg'),
    thanks:require('../assets/ty.jpg')
}