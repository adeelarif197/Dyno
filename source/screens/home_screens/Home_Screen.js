import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Primary_Color } from '../styles/Colors_Screen'
import Menu from 'react-native-vector-icons/Entypo'
import Location from 'react-native-vector-icons/MaterialIcons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'


const LAT_DELTA = 0.0015, LNG_DELTA = 0.0021

export default class Home_Screen extends Component {

    render() {
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