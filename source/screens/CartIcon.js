import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { connect, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { combineReducers } from 'redux';
import ReducersActions from '../redux/ReducersActions';
import ReducersProps from '../redux/ReducersProps';
import Products from './Products';
import cart from './cart';

const ShoppingCartIcon = (props) => {
	const cartData = useSelector(state => state.cartReducer)
	return (
		<TouchableOpacity
			onPress={() => props.navigation.navigate('cart')
		}
			style={[ { padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null ]}
		>
			<View
				style={{
					position: 'absolute',
					height: 30,
					width: 30,
					borderRadius: 15,
					backgroundColor: 'rgba(95,197,123,0.8)',
					right: 15,
					bottom: 15,
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 2000
				}}>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>{cartData.length}</Text>
			</View>
			<Icon name="ios-cart" size={30} />
		</TouchableOpacity>
	);
};

export default connect(ReducersProps, ReducersActions)(ShoppingCartIcon);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconContainer: {
		paddingLeft: 20,
		paddingTop: 10,
		marginRight: 5
	}
});
