import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import Header from '../../components/headers/Header'
import Small_Buttons from '../../components/buttons/Small_Buttons'
import { Primary_Color } from '../../../source/screens/styles/Colors_Screen'
import OutlineInput from 'react-native-outline-input';
import Eye from 'react-native-vector-icons/Entypo'

export default class Signup_Screen extends Component {

    constructor() {
        super()
        this.state = {
            fullname: '',
            email: '',
            password: '',
            confirmpassword: '',
            show_password: true,
            show_confirm_password: true
        }
    }

    
    show_password = () => {
        this.setState({ show_password: !this.state.show_password })
    }

    show_confirm_password = () => {
        this.setState({ show_confirm_password: !this.state.show_confirm_password })
    }

    render() {
        const { fullname, email, password, confirmpassword,show_password,show_confirm_password } = this.state
        return (
            <View style={styles.containter}>
                <ScrollView>
                    <View>
                        <Header title='Create an account' navigation={() => this.props.navigation.navigate('Welcome_Screen')} />
                    </View>

                    <View style={styles.step_View}>
                        <Text style={styles.step_Title}>Step 1 of 2</Text>
                    </View>

                    <View style={styles.heading_View}>
                        <Text style={styles.heading_Title}>Enter your all details to register</Text>
                    </View>

                    <View style={styles.description_View}>
                        <Text>Kindly enter your email address and password for register.</Text>
                    </View>

                    <View style={styles.email_View}>
                        <OutlineInput
                            value={fullname}
                            onChangeText={(text) => this.setState({ fullname: text })}
                            label="Full Name"
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

                    <View style={styles.password_View}>
                        <OutlineInput
                            value={confirmpassword}
                            onChangeText={(text) => this.setState({ confirmpassword: text })}
                            label="Confirm Password"
                            secureTextEntry={show_confirm_password}
                            activeValueColor={Primary_Color}
                            activeBorderColor={Primary_Color}
                            activeLabelColor={Primary_Color}
                            passiveBorderColor={Primary_Color}
                            passiveLabelColor={Primary_Color}
                            passiveValueColor={Primary_Color}
                        />

                        <View style={styles.eye_Icon_View}>
                            <TouchableOpacity onPress={this.show_confirm_password}>
                                <Eye name={show_confirm_password ? 'eye-with-line' : 'eye'} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.button_View}>
                        <Small_Buttons
                            title='Signup'
                            navigation={() => this.props.navigation.navigate('Signup_Screen')} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: 'white',
    },

    heading_View: {
        marginTop: "3%",
        marginHorizontal: 20,
    },

    step_View: {
        marginTop: '5%',
        marginLeft: '7%'
    },

    step_Title: {
        color: Primary_Color,
        fontWeight: 'bold'
    },

    description_View: {
        marginHorizontal: '5%',
        marginRight: '10%',
        marginTop: '3%'
    },

    heading_Title: {
        fontSize: 29,
        fontWeight: 'bold',
    },

    email_View: {
        marginTop: 50,
        marginHorizontal: 20
    },

    password_View: {
        marginTop: 30,
        marginHorizontal: 20
    },

    button_View: {
        marginTop: 50,
        marginBottom: 27
    },

    eye_Icon_View: {
        position: 'absolute',
        padding: 16.5,
        alignSelf: 'flex-end',
        top: '0%',
        right: '1.5%',
        borderRadius: 5
    }
})