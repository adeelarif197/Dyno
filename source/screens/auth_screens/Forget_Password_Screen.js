import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../components/headers/Header'
import OutlineInput from 'react-native-outline-input';
import { Primary_Color } from '../../../source/screens/styles/Colors_Screen'
import Small_Buttons from '../../components/buttons/Small_Buttons'

export default class Forget_Password_Screen extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
        }
    }

    render() {
        const { email } = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Header title='Forget Password' navigation={() => this.props.navigation.navigate('Login_Screen')} />
                    </View>

                    <View style={styles.heading_View}>
                        <Text style={styles.heading_Title}>Enter your email address</Text>
                    </View>

                    <View style={styles.description_View}>
                        <Text>Kindly enter your email address.</Text>
                    </View>

                    <View style={styles.email_View}>
                        <OutlineInput
                            value={email}
                            onChangeText={(text) => this.setState({ email: text })}
                            label="Email"
                            activeValueColor={Primary_Color}
                            activeBorderColor={Primary_Color}
                            activeLabelColor={Primary_Color}
                            passiveBorderColor={Primary_Color}
                            passiveLabelColor={Primary_Color}
                            passiveValueColor={Primary_Color}
                        />
                    </View>

                    <View style={styles.foget_Password_View}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forget_Password_Phone_Screen')}>
                            <Text style={styles.foget_Password_Text}>Phone Number</Text>
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