import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/headers/Header';
import Small_Buttons from '../../components/buttons/Small_Buttons';
import { Primary_Color } from '../../../source/screens/styles/Colors_Screen';
import { TextInput, Button } from 'react-native-paper';

export default function Signup_Screen({navigation}) {
	const [ name, setname ] = useState('');
	const [ emailAddress, setemailAddress ] = useState('');
	const [ password, setpassword ] = useState('');
	const [ passwordVisible, setPasswordVisible ] = useState(true);
	return (
		<View style={styles.containter}>
			<ScrollView>
				<View>
					<Header
						title="Create an account"
						navigation={() => navigation.navigate('Welcome_Screen')}
					/>
				</View>

				<View style={styles.step_View}>
					<Text style={styles.step_Title}>Step 1 of 2</Text>
				</View>

				<View style={styles.heading_View}>
					<Text style={styles.heading_Title}>Please submit your details </Text>
				</View>

				<View style={styles.description_View}>
					<Text>Kindly fill your name, email address and password for registration.</Text>
				</View>

				<View style={styles.email_View}>
					<TextInput
						style={styles.textinput}
						mode="outlined"
						label="Name"
						value={name}
						onChangeText={(name) => setname(name)}
					/>
				</View>

				<View style={styles.password_View}>
					<TextInput
						style={styles.textinput}
						mode="outlined"
						label="Email"
						value={emailAddress}
						onChangeText={(emailAddress) => setemailAddress(emailAddress)}
					/>
				</View>

				<View style={styles.password_View}>
					<TextInput
						style={styles.textinput}
						mode="outlined"
						label="Password"
						value={password}
						onChangeText={(password) => setpassword(password)}
						secureTextEntry={passwordVisible}
						right={
							<TextInput.Icon
								name={passwordVisible ? 'eye' : 'eye-off'}
								onPress={() => setPasswordVisible(!passwordVisible)}
							/>
						}
					/>
				</View>
				<View style={styles.button_View}>
					<Small_Buttons title="Signup" navigation={() => navigation.navigate('Login_Screen')} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	containter: {
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
		fontWeight: 'bold'
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
});
