import { Box, Text } from 'native-base'
import React, { useRef, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ route }) => {

    const { latitude = 37.04155255419312, longitude = 35.361228364710904 } = route.params || {};

    const mapRef = useRef(null);

    useEffect(() => {
        mapRef.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.0100,
        }, 1000);
    }, [route]);

    return (
        <Box>
            <MapView
                ref={mapRef}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 37.04155255419312,
                    longitude: 35.361228364710904,
                    latitudeDelta: 0.0010,
                    longitudeDelta: 0.0010,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.04155255419312,
                        longitude: 35.361228364710904
                    }}
                    title="Çukurova Teknokent Şarj İstasyonu"
                    description="400+ kW / H destekliyor"
                />
                <Marker
                    coordinate={{
                        latitude: 37.05572529095496,
                        longitude: 35.362674754645695
                    }}
                    title="Balcalı Hastanesi Şarj İstasyonu"
                    description="400+ kW / H destekliyor"
                />
            </MapView>
            <Text>Map</Text>
        </Box>
    )
}

export default Map