import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Primary_Color } from '../styles/Colors_Screen'

export default class Welcome_Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/images/Welcome_Screen.png')} style={styles.image_Background}>
                    <ScrollView>
                        <View style={styles.heading_View}>
                            <Text style={styles.heading_Text}> Taxi App </Text>
                        </View>

                        <View style={styles.info_View}>
                            <Text style={styles.info_Text}> Get a Ride in few minutes </Text>
                        </View>

                        <View style={styles.details_View}>
                            <Text style={styles.details_Text}> Call profesional drivers from this App. </Text>
                        </View>

                        <View style={styles.buttons_Main_View}>
                            <View style={styles.login_Button_View}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login_Screen')}>
                                    <Text style={styles.login_Button_Text}>Login</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.signup_Button_View}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup_Screen')}>
                                    <Text style={styles.signup_Button_Text}>Signup</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image_Background: {
        height: '100%'
    },

    heading_View: {
        marginLeft: 20,
        marginTop: 480
    },

    heading_Text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    info_View: {
        marginTop: 40,
        marginLeft: 20
    },

    info_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    details_View: {
        marginTop: 10,
        marginLeft: 20
    },

    details_Text: {
        color: 'white'
    },

    buttons_Main_View: {
        flexDirection: 'row',
        marginTop: 50,
        alignSelf: 'center',
    },

    login_Button_View: {
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        height: 50,
        width: 150,
        justifyContent: 'center',
    },

    signup_Button_View: {
        marginLeft: 5,
        borderRadius: 10,
        borderColor: 'white',
        height: 50,
        width: 150,
        justifyContent: 'center',
        backgroundColor: Primary_Color
    },

    login_Button_Text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    signup_Button_Text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})
