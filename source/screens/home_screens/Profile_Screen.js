import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Simple_Header from '../../components/headers/Simple_Header'
import Wallet from 'react-native-vector-icons/Entypo'
import Lock from 'react-native-vector-icons/Fontisto'
import Location from 'react-native-vector-icons/Entypo'
import Card from 'react-native-vector-icons/FontAwesome'
import Help from 'react-native-vector-icons/Entypo'

export default class Profile_Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Simple_Header title='My Profile' navigation={()=>this.props.navigation.navigate('Home_Screen')}/>
                </View>

                <View style={styles.container1}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.profile_Image_View}>
                            <Image source={require('../../../assets/images/Profile.png')} style={styles.profile_Image} />
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Umair Hassan</Text>
                            <Text style={{ marginTop: 5, color: '#838385' }}>+92-343-1171-815</Text>
                            <TouchableOpacity style={{ marginTop: 15, }}>
                                <Text style={{ fontSize: 16, color: '#63629B' }}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.container2}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#EFEFF4', padding: 20 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <View>
                                    <Wallet name='wallet' size={25} />
                                </View>

                                <View>
                                    <Text style={{ marginLeft: 20, fontSize: 16 }}>My Wallet</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#EFEFF4', padding: 23 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <View>
                                    <Lock name='locked' size={22} />
                                </View>

                                <View>
                                    <Text style={{ marginLeft: 20, fontSize: 16 }}>Change Password</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#EFEFF4', padding: 20 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <View>
                                    <Location name='location-pin' size={25} />
                                </View>

                                <View>
                                    <Text style={{ marginLeft: 20, fontSize: 16 }}>Saved Address</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#EFEFF4', padding: 20 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <View>
                                    <Card name='credit-card' size={25} />
                                </View>

                                <View>
                                    <Text style={{ marginLeft: 20, fontSize: 16 }}>Saved Payment Mathods</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ borderBottomColor: '#EFEFF4', padding: 20 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <View>
                                    <Help name='message' size={25} />
                                </View>

                                <View>
                                    <Text style={{ marginLeft: 20, fontSize: 16 }}>Help Center</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ height: '8%',elevation:10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 'bold', color: '#D45740',padding:16 }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    container1: {
        backgroundColor: 'white',
        height: "23%",
        elevation:10
    },

    container2: {
        backgroundColor: 'white',
        height: '46%',
        marginTop: 10,
        elevation:10
    },

    profile_Image_View: {
        marginTop: 20,
        marginLeft: 10,
    },

    profile_Image: {
        width: 100,
        height: 100
    },
})