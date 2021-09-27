import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE, ProviderPropType, Circle, Polyline } from 'react-native-maps';
import { check, request, checkMultiple, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions'
import GeoLocation from 'react-native-geolocation-service'
import Header from '../../components/headers/Header';
import Back_Icon from 'react-native-vector-icons/Ionicons';
import Location from 'react-native-vector-icons/MaterialIcons'
import { Primary_Color } from '../styles/Colors_Screen';
import FBDBhelper from '../../data/online/FBDBhelper';

const LAT_DELTA = 0.0120, LNG_DELTA = 0.0120

const fbHelper = new FBDBhelper()

export default class Map_Screen extends Component {

    constructor() {
        super()
        this.state = {
            currentLat: 28.435000903707095,
            currentLng: 70.30891101192892,
            shops: [],
            shops1: [],
            circle: [],
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

    startTracking() {
        this.checkForLocationPermission((isAllowed) => {
            if (isAllowed) {
                this.locationListner = GeoLocation.watchPosition((position) => {
                    this.setState({
                        currentLat: position.coords.latitude,
                        currentLng: position.coords.longitude
                    })
                    fbHelper.updateLocToDB(1,
                        position.coords.latitude,
                        position.coords.longitude
                    )
                }, (error) => {
                    console.log(error)
                }, { enableHighAccuracy: true }

                )
            } else {
                console.log("Permission not Allowed!")
            }
        })
    }

    stopTracking() {
        if (this.locationListner) {
            clearWatch(this.locationListner)
        }
    }

    render() {
        const { currentLat, currentLng, shops, shops1, circle } = this.state

        let polyLines = []
        shops1.map((s) => {
            polyLines.push({ latitude: s.lat, longitude: s.lng })
        })
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={styles.back_Icon_View}>
                    <TouchableOpacity style={styles.back_Icon_Touch} onPress={() => this.props.navigation.navigate('Home_Screen')}>
                        <Back_Icon name='arrow-back' size={25} />
                    </TouchableOpacity>
                </View>

                <View style={styles.back_Icon_View1}>
                    <TouchableOpacity style={styles.back_Icon_Touch1} onPress={() => this.loadCurrentLocation()}>
                        <Location name='my-location' size={25} />
                    </TouchableOpacity>
                </View>

                <MapView
                    style={{ flex: 1 }}
                    region={{
                        latitude: currentLat,
                        longitude: currentLng,
                        latitudeDelta: LAT_DELTA,
                        longitudeDelta: LNG_DELTA,

                    }}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    onMapReady={() => this.startTracking()}
                >




                    {/* <Circle
                        center={{
                            latitude: currentLat,
                            longitude: currentLng,
                            latitudeDelta: LAT_DELTA,
                            longitudeDelta: LNG_DELTA,
                        }}
                        radius={500}
                        fillColor={"(rgba(115,230,243,0.3)"}
                        strokeColor='#fff'
                    /> */}

                    {circle.map((item, index) => {
                        return (
                            <Circle
                                key={index}
                                center={{
                                    latitude: item.latitude,
                                    longitude: item.longitude,
                                    latitudeDelta: LAT_DELTA,
                                    longitudeDelta: LNG_DELTA,
                                }}
                                radius={item.radius}
                                fillColor={item.fillColor}
                                strokeColor={item.strokeColor}
                            />
                        )
                    })}


                    {shops.length > 1 &&
                        <Polyline
                            coordinates={polyLines}
                        />
                    }

                    {shops.map((item, index) => {
                        return (
                            <Marker
                                key={index}
                                title={item.title}
                                description={"Data is Here"}
                                coordinate={{
                                    latitude: item.lat,
                                    longitude: item.lng,
                                    latitudeDelta: LAT_DELTA,
                                    longitudeDelta: LNG_DELTA,
                                }}
                                pinColor={item.color}
                            />)
                    })

                    }
                </MapView>

                <View style={{ height: 250, elevation: 10, backgroundColor: '#FDFDFD' }}>
                    <View style={{ borderBottomWidth: 1.5, marginHorizontal: 20, borderBottomColor: '#EEEFF2' }}>
                        <Text style={{ alignSelf: 'center', padding: 10, fontWeight: 'bold', color: '#5B5B5B' }}>Move pin to adjust pickup point</Text>
                    </View>

                    <View style={{ marginTop: 20, marginLeft: 20, }}>
                        <TouchableOpacity style={{ backgroundColor: Primary_Color, marginRight: 20, padding: 10 }} onPress={() =>
                            this.setState({
                                shops: [
                                    {
                                        title: "shop no 1",
                                        lat: 28.436128644000487,
                                        lng: 70.30407666083636,
                                        color: "red"
                                    },
                                    {
                                        title: "shop no 2",
                                        lat: 28.432887560747037,
                                        lng: 70.30524797061719,
                                        color: "yellow"
                                    },
                                    {
                                        title: "shop no 3",
                                        lat: 28.433705611746138,
                                        lng: 70.31351799194083,
                                        color: "green"
                                    },
                                    {
                                        title: "shop no 4",
                                        lat: 28.437950669559964,
                                        lng: 70.31217671480782,
                                        color: "purple"
                                    },
                                ]
                            })}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Show multiple markers</Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E8EC' }} onPress={() =>
                            this.setState({
                                circle: [
                                    {
                                        latitude: currentLat,
                                        longitude: currentLng,
                                        latitudeDelta: LAT_DELTA,
                                        longitudeDelta: LNG_DELTA,
                                        radius: 500,
                                        fillColor: "(rgba(115,230,243,0.3)",
                                        strokeColor: '#fff'
                                    },]
                            })}>
                            <Location name='my-location' size={20} style={{ borderRightWidth: 1, padding: 15, borderRightColor: '#EEEFF2' }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>Radius</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{ marginTop: 20, marginHorizontal: 20, backgroundColor: Primary_Color, padding: 10 }} onPress={() =>
                            this.setState({
                                shops1: [
                                    {
                                        title: "shop no 1",
                                        lat: 28.436128644000487,
                                        lng: 70.30407666083636,
                                        color: "red"
                                    },
                                    {
                                        title: "shop no 2",
                                        lat: 28.432887560747037,
                                        lng: 70.30524797061719,
                                        color: "yellow"
                                    },
                                    {
                                        title: "shop no 3",
                                        lat: 28.433705611746138,
                                        lng: 70.31351799194083,
                                        color: "green"
                                    },
                                    {
                                        title: "shop no 4",
                                        lat: 28.437950669559964,
                                        lng: 70.31217671480782,
                                        color: "purple"
                                    },
                                    {
                                        title: "shop no 1",
                                        lat: 28.436128644000487,
                                        lng: 70.30407666083636,
                                        color: "red"
                                    },
                                ]
                            })}>
                            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                                Poly Lines
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    back_Icon_View: {
        position: 'absolute',
        zIndex: 1
    },

    back_Icon_Touch: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 40,
        marginTop: 10,
        marginLeft: 10,
    },

    back_Icon_View1: {
        position: 'absolute',
        zIndex: 1,
        bottom: 300,
        right: 20
    },

    back_Icon_Touch1: {
        backgroundColor: '#E6E8EC',
        padding: 10,
        borderRadius: 40,
        marginTop: 10,
        marginLeft: 10,
    },

})