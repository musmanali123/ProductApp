import { StyleSheet, Text, View } from "react-native"
import { colors, windowHeight } from "../utils/utils";

const AllUserDetailsScreen = ({route}) =>{
console.log('Route',route?.params?.data);
return(
        <View style={styles.container}>
            <View>
            <Text style={styles.heading}>User Info</Text>
            <View style={styles.divider}></View>
            <Text style={styles.available}>First Name: {route?.params?.data?.data?.firstName}</Text>
            <Text style={styles.available}>Last Name: {route?.params?.data?.data?.lastName}</Text>
            <Text >Phone Number: {route?.params?.data?.data?.phoneNumber}</Text>
            <Text>Home Adress: {route?.params?.data?.data?.adress}</Text>
            </View>
            <View style={styles.divider}></View>
            <View>
            <Text style={styles.heading}>Work Details</Text>
            <View style={styles.divider}></View>
            <Text style={styles.available}>Nature Of Work: {route?.params?.data?.data?.natureofWork}</Text>
            <Text style={styles.available}>Totol Number Experience: {route?.params?.data?.data?.Experience}</Text>
            <Text>Office or Work Adress: {route?.params?.data?.data?.addreess}</Text>
            <Text>Home Town: {route?.params?.data?.data?.city}</Text>
            </View>
            <View style={styles.divider}></View>
            <View>
            <Text style={styles.heading}>Contact Info</Text>
            <View style={styles.divider}></View>
            <Text style={styles.available}>User Email: {route?.params?.data?.email} </Text>
            <Text style={styles.available}>WhatsApp Number: {route?.params?.data?.whatsupNumber} </Text>
            <Text>Fax Number: {route?.params?.data?.faxNumber} </Text>
            <Text>AnyOther Adress:{route?.params?.data?.anyOtherAdress}  </Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
        flex: 1,
        marginVertical:'10%'
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        letterSpacing: 1,
        color: colors.black,
        // marginBottom:'5%'
    },
    available: {
        fontSize: 14,
        color: colors.blue
    },
    divider: {
        width: windowHeight * 0.38,
        borderColor: colors.blue1,
        borderWidth: 1,
        opacity: 0.2,
        marginTop: 10,
        marginBottom: 10
    },
});


export default AllUserDetailsScreen;