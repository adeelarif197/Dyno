import React, { Component, useState, useRef } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../components/headers/Header'
import Small_Buttons from '../../components/buttons/Small_Buttons'
import PhoneInput from "react-native-phone-number-input";

export default class Forget_Password_Phone_Screen extends Component {

    constructor() {
        super()
        this.state = {
            phone: '',
            put:'',
            putted:'',
            value: '',
        }
    }

    render() {
        const { value } = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Header title='Forget Password' navigation={() => this.props.navigation.navigate('Login_Screen')} />
                    </View>

                    <View style={styles.heading_View}>
                        <Text style={styles.heading_Title}>Enter your Phone Number</Text>
                    </View>

                    <View style={styles.description_View}>
                        <Text>Kindly enter your Phone Number.</Text>
                    </View>

                    <View>
                        <PhoneInput
                            containerStyle={{ marginLeft: 25, marginTop: 50,borderRadius:5,width:305,height:70}}
                            textContainerStyle={{borderRadius:5, }}
                            textInputStyle={{fontSize:14}}
                            codeTextStyle={{}}
                            defaultValue={value}
                            defaultCode="PK"
                            layout="first"
                            onChangeText={(text) => {this.setState({put:text}); }}
                            onChangeFormattedText={(text) => { this.setState({putted:text});}}
                            withShadow
                        />
                    </View>

                    <View style={styles.foget_Password_View}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forget_Password_Screen')}>
                            <Text style={styles.foget_Password_Text}>Email Address</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button_View}>
                        <Small_Buttons
                            title='Submit'
                            navigation={() => this.props.navigation.navigate('Verification_Code_Screen')} />
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

    heading_View: {
        marginTop: "3%",
        marginHorizontal: 20,
    },

    heading_Title: {
        fontSize: 29,
        fontWeight: 'bold',
    },

    description_View: {
        marginHorizontal: '5%',
        marginRight: '10%',
        marginTop: '3%'
    },

    email_View: {
        marginTop: 80,
        marginHorizontal: 20
    },

    button_View: {
        marginTop: 50,
        marginBottom: 50,
    },

    foget_Password_View: {
        alignSelf: 'flex-end',
        marginRight: '8%',
        marginTop: '3%'
    },

    foget_Password_Text: {
        fontSize: 15,
        fontWeight: 'bold'
    }

})