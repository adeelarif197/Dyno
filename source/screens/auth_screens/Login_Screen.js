import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/headers/Header'
import Small_Buttons from '../../components/buttons/Small_Buttons'
import { Primary_Color } from '../../../source/screens/styles/Colors_Screen'
import Eye from 'react-native-vector-icons/Entypo'
import OutlineInput from 'react-native-outline-input';

export default class Login_Screen extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            show_password: true,
        }
    }

    show_password = () => {
        this.setState({ show_password: !this.state.show_password })
    }

    render() {
        const { email, password, show_password } = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Header title='Login' navigation={() => this.props.navigation.navigate('Welcome_Screen')} />
                    </View>

                    <View style={styles.step_View}>
                        <Text style={styles.step_Title}>Step 1 of 2</Text>
                    </View>

                    <View style={styles.heading_View}>
                        <Text style={styles.heading_Title}>Enter your email address</Text>
                    </View>

                    <View style={styles.description_View}>
                        <Text>Kindly enter your email address and password for login.</Text>
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

                    <View style={styles.password_View}>
                        <OutlineInput
                            value={password}
                            onChangeText={(text) => this.setState({ password: text })}
                            label="Password"
                            secureTextEntry={show_password}
                            activeValueColor={Primary_Color}
                            activeBorderColor={Primary_Color}
                            activeLabelColor={Primary_Color}
                            passiveBorderColor={Primary_Color}
                            passiveLabelColor={Primary_Color}
                            passiveValueColor={Primary_Color}
                        />
                        <View style={styles.eye_Icon_View}>
                            <TouchableOpacity onPress={this.show_password}>
                                <Eye name={show_password ? 'eye-with-line' : 'eye'} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.foget_Password_View}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forget_Password_Screen')}>
                            <Text style={styles.foget_Password_Text}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button_View}>
                        <Small_Buttons
                            title='Login'
                            navigation={() => this.props.navigation.navigate('Home_Screen')} />
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

    step_View: {
        marginTop: '5%',
        marginLeft: '7%'
    },

    step_Title: {
        color: Primary_Color,
        fontWeight: 'bold'
    },



    email_View: {
        marginTop: 80,
        marginHorizontal: 20,
    },

    password_View: {
        marginTop: 30,
        marginHorizontal: 20
    },

    button_View: {
        marginTop: 50,
        marginBottom: 50,
    },

    eye_Icon_View: {
        position: 'absolute',
        padding: 16.5,
        alignSelf: 'flex-end',
        top: '0%',
        right: '1.5%',
        borderRadius: 5
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