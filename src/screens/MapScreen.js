import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Button, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import CustomButton from '../components/CustomButton';

export default function MapScreen({ navigation }) {
    const [region, setRegion] = useState({
        latitude: 24.8703091,
        longitude: 67.1754963,
        latitudeDelta: 5,
        longitudeDelta: 5
    })

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != "granted") {
            alert('Access Denied!')
            return
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 5,
            longitudeDelta: 5
        });
    }
    useEffect(() => {
        getCurrentLocation()
    }, [])

    return (
        <View style={styles.container}>
            <MapView
                showsTraffic={true}
                userLocationPriority='high'
                mapType='standard'
                region={region}
                followsUserLocation={true}
                zoomEnabled={true}
                showsUserLocation={true}
                style={styles.map}>
                <Marker coordinate={region} title='User Location' />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});