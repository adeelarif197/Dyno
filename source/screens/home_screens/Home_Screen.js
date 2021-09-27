import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Primary_Color } from '../styles/Colors_Screen'
import Menu from 'react-native-vector-icons/Entypo'
import Location from 'react-native-vector-icons/MaterialIcons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Marker, PROVIDER_GOOGLE, ProviderPropType, } from 'react-native-maps';
import { check, request, checkMultiple, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions'
import GeoLocation from 'react-native-geolocation-service'

const LAT_DELTA = 0.0015, LNG_DELTA = 0.0021

export default class Home_Screen extends Component {

    constructor() {
        super()
        this.state = {
            currentLat: 37.78825,
            currentLng: -122.4324
        }
    }

    async checkForLocationPermission(onResult) {
        const locPerms = [
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION
        ]
        try {
            let result = await checkMultiple(locPerms)
            let gCount = locPerms.filter(p => result[p] == "granted").length
            if (gCount == locPerms.length) {
                onResult(true)
            } else {
                let result2 = await requestMultiple(locPerms)
                let rCount = locPerms.filter(p => result2[p] == "granted").length
                onResult(rCount == locPerms.length)
            }
        } catch (error) {
            console.log(error)
            onResult(false)
        }
    }

    loadCurrentLocation() {
        this.checkForLocationPermission((isAllowed) => {
            if (isAllowed) {
                GeoLocation.getCurrentPosition((position) => {
                    this.setState({
                        currentLat: position.coords.latitude,
                        currentLng: position.coords.longitude,
                    })
                }, (error) => {
                    console.log(error)
                }, { enableHighAccuracy: true })
            } else {
                console.log("permission not allowed")
            }
        })

    }
    render() {
        const { currentLat, currentLng } = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container1}>
                        <View style={{ marginTop: 20, marginLeft: 15, position: 'absolute' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Screen')}>
                                <Menu name='menu' size={40} color='white' />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={{ fontSize: 20, color: 'white', marginLeft: 20, marginTop: 80 }}>Enhance your pickup{'\n'}experience</Text>
                        </View>

                        <View>
                            <Text style={{ marginLeft: 20, marginTop: 20, color: 'white', fontSize: 15 }}>Get a faster, hassle-free pickup at your{'\n'}precise location.</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 20, marginLeft: 20, color: 'white' }}>Share Location</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', alignItems: 'center', flexDirection: 'row', borderRadius: 5, elevation: 10, padding: 10, marginTop: 30, marginHorizontal: 20 }}>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Map_Screen')}>
                                <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: 'bold', color: 'black' }}>Enter Pickup Point</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={{ padding: 10 }} onPress={() => this.loadCurrentLocation()}>
                            <Location name='my-location' size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginLeft: 25, marginTop: 30 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Around You</Text>
                    </View>

                    <View style={{ height: 200, marginBottom: 100, marginHorizontal: 20, marginTop: 20, elevation: 20, backgroundColor: 'white' }}>
                        <MapView
                            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={{ flex: 1 }}
                            region={{
                                latitude: currentLat,
                                longitude: currentLng,
                                latitudeDelta: LAT_DELTA,
                                longitudeDelta: LNG_DELTA,

                            }}
                        >
                            <Marker
                                title={"Me"}
                                description={"some description"}
                                coordinate={{
                                    latitude: currentLat,
                                    longitude: currentLng,
                                    latitudeDelta: LAT_DELTA,
                                    longitudeDelta: LNG_DELTA,
                                }}
                            />
                        </MapView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    container1: {
        backgroundColor: Primary_Color,
        height: '35%'
    }
})