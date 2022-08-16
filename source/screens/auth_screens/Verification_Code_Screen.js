import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/headers/Header'
import Small_Buttons from '../../components/buttons/Small_Buttons'
import CodeInput from 'react-native-confirmation-code-input';
import { Primary_Color } from '../styles/Colors_Screen';

export default function Verification_Code_Screen({navigation}){

    const [ verify, setverify ] = useState('');
    const codeInputRef2 = useRef();
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Header title='Verify Code' navigation={() => navigation.navigate('Forget_Password_Screen')} />
                    </View>

                    <View style={styles.heading_View}>
                        <Text style={styles.heading_Title}>Enter your Verification Code</Text>
                    </View>

                    <View style={styles.description_View}>
                        <Text>Kindly enter the Verification Code send on your email.</Text>
                    </View>

                    <View style={styles.Code_View}>
                        <CodeInput
                            ref={codeInputRef2}
                            activeColor='black'
                            inactiveColor='black'
                            keyboardType="numeric"
                            value={verify}
                            codeLength={5}
                            autoFocus={false}
                            ignoreCase={true}
                            inputPosition='center'
                            size={50}
                            onFulfill={(code) => setverify(code)}
                            containerStyle={{ marginTop: 20, }}
                            codeInputStyle={styles.Verify_Code}
                        />
                    </View>

                    <View style={styles.button_View}>
                        <Small_Buttons
                            title='Submit'
                            navigation={() => navigation.navigate('Reset_Password_Screen')} />
                    </View>
                </ScrollView>
            </View>
        )
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
    textinput: {
		width: '95%',
		alignSelf: 'center'
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

    Code_View: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 70,
        marginTop: 70
    },

    button_View: {
        marginTop: 50,
        marginBottom: 50,
    },

    Verify_Code: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: 'black',
        color: Primary_Color,
        fontWeight: 'bold',
        fontSize: 20,
    },
})