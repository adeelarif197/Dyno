import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import Header from '../../components/headers/Header'
import OutlineInput from 'react-native-outline-input';
import { Primary_Color } from '../../../source/screens/styles/Colors_Screen'
import Eye from 'react-native-vector-icons/Entypo'
import Small_Buttons from '../../components/buttons/Small_Buttons'

export default class Reset_Password_Screen extends Component {

    constructor() {
        super()
        this.state = {
            newpassword: '',
            confirmpassword: '',
            show_newpassword: true,
            show_confirmpassword:true
        }
    }

    show_newpassword = () => {
        this.setState({ show_newpassword: !this.state.show_newpassword })
    }

    show_confirmpassword = () => {
        this.setState({ show_confirmpassword: !this.state.show_confirmpassword })
    }

    render() {
        const {newpassword,confirmpassword,show_newpassword,show_confirmpassword} = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                <View>
                    <Header title='Reset Password' navigation={() => this.props.navigation.navigate('Welcome_Screen')} />
                </View>

                <View style={styles.heading_View}>
                    <Text style={styles.heading_Title}>Enter your New Password </Text>
                </View>

                <View style={styles.description_View}>
                    <Text>Kindly enter your New Password and Confirm Password.</Text>
                </View>

                <View style={styles.password_View}>
                        <OutlineInput
                            value={newpassword}
                            onChangeText={(text) => this.setState({ newpassword: text })}
                            label="New Password"
                            secureTextEntry={show_newpassword}
                            activeValueColor={Primary_Color}
                            activeBorderColor={Primary_Color}
                            activeLabelColor={Primary_Color}
                            passiveBorderColor={Primary_Color}
                            passiveLabelColor={Primary_Color}
                            passiveValueColor={Primary_Color}
                        />
                        <View style={styles.eye_Icon_View}>
                            <TouchableOpacity onPress={this.show_newpassword}>
                                <Eye name={show_newpassword ? 'eye-with-line' : 'eye'} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.password_View}>
                        <OutlineInput
                            value={confirmpassword}
                            onChangeText={(text) => this.setState({ confirmpassword: text })}
                            label="Confirm Password"
                            secureTextEntry={show_confirmpassword}
                            activeValueColor={Primary_Color}
                            activeBorderColor={Primary_Color}
                            activeLabelColor={Primary_Color}
                            passiveBorderColor={Primary_Color}
                            passiveLabelColor={Primary_Color}
                            passiveValueColor={Primary_Color}
                        />
                        <View style={styles.eye_Icon_View}>
                            <TouchableOpacity onPress={this.show_confirmpassword}>
                                <Eye name={show_confirmpassword ? 'eye-with-line' : 'eye'} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.button_View}>
                        <Small_Buttons
                            title='Reset'
                            navigation={() => this.props.navigation.navigate('Login_Screen')} />
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
        marginTop: "10%",
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

    password_View: {
        marginTop: 30,
        marginHorizontal: 20
    },

    eye_Icon_View: {
        position: 'absolute',
        padding: 16.5,
        alignSelf: 'flex-end',
        top: '0%',
        right: '1.5%',
        borderRadius: 5
    },

    button_View: {
        marginTop: 50,
        marginBottom: 50,
    },

})