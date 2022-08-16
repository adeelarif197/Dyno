import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/headers/Header';
import Small_Buttons from '../../components/buttons/Small_Buttons';
import { TextInput, Button } from 'react-native-paper';

export default function Forget_Password_Screen({ navigation }) {
	const [ emailAddress, setemailAddress ] = useState('');

	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<Header title="Forget Password" navigation={() => navigation.navigate('Login_Screen')} />
				</View>

				<View style={styles.heading_View}>
					<Text style={styles.heading_Title}>Enter your email address</Text>
				</View>

				<View style={styles.description_View}>
					<Text>Kindly enter your email address.</Text>
				</View>

				<View style={styles.email_View}>
					<TextInput
						style={styles.textinput}
						mode="outlined"
						label="Email"
						value={emailAddress}
						onChangeText={(emailAddress) => setemailAddress(emailAddress)}
					/>
				</View>

				<View style={styles.foget_Password_View}>
					<TouchableOpacity onPress={() => navigation.navigate('Forget_Password_Phone_Screen')}>
						<Text style={styles.foget_Password_Text}>Phone Number</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.button_View}>
					<Small_Buttons title="Submit" navigation={() => navigation.navigate('Verification_Code_Screen')} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
    textinput: {
		width: '95%',
		alignSelf: 'center'
	},
	heading_View: {
		marginTop: '3%',
		marginHorizontal: 20
	},

	heading_Title: {
		fontSize: 29,
		fontWeight: 'bold'
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
		marginBottom: 50
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
});
