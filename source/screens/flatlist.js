import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
            // Array of Data (items)
			Data: [
				{
					id: 1,
					title: 'Android Programming',
					image: require('../../assets/images/android.png'),
					price: '10$',
					qty: 1
				},
				{
					id: 2,
					title: 'Awaken',
					image: require('../../assets/images/awaken.png'),
					price: '20$',
					qty: 1
				},
				{
					id: 3,
					title: 'ES6',
					image: require('../../assets/images/es6.png'),
					price: '30$',
					qty: 1
				},
				{
					id: 4,
					title: 'Node',
					image: require('../../assets/images/node.png'),
					price: '40$',
					qty: 1
				},
				{
					id: 5,
					title: 'Pro Git',
					image: require('../../assets/images/progit.png'),
					price: '50$',
					qty: 1
				},
				{
					id: 6,
					title: 'React JS blue',
					image: require('../../assets/images/reactjsblue.png'),
					price: '60$',
					qty: 1
				},
				{
					id: 7,
					title: 'Angular Book2',
					image: require('../../assets/images/ngbook21.png'),
					price: '70$',
					qty: 1
				},
				{
					id: 8,
					title: 'Switch In TO',
					image: require('../../assets/images/switchingto.png'),
					price: '80$',
					qty: 1
				},
				{
					id: 9,
					title: 'Survive JS',
					image: require('../../assets/images/survivejs.png'),
					price: '90$',
					qty: 1
				},
				{
					id: 10,
					title: 'Selling',
					image: require('../../assets/images/selling.png'),
					price: '100$',
					qty: 1
				}
			]
		};
	}
        
                    // ProductsView is a function for the display of Products in Array

	ProductsView = (props) => {
		const { counter } = this.state;

		return (
			<View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', margin: 10 }}>
				<View
					style={{
						margin: 10
					}}
				>
					<Image style={{ height: 135, width: 110 }} source={props.item.image} />
				</View>
				<View style={{ flex: 1, padding: 10 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 17 }}>{props.item.title}</Text>
					<Text style={{ fontWeight: 'bold', fontSize: 17 }}>{props.item.price}</Text>
					<Text style={{ fontWeight: 'bold', fontSize: 17 }}>{props.item.qty}</Text>
					<View style={{ flexDirection: 'row', top: 10 }} />

					<View
						style={{
							backgroundColor: '#EDF3F6',
							height: 45,
							width: 100,
							borderRadius: 15,
							marginLeft: 10,
							marginRight: 10,
							top: 20
						}}
					/>
					<TouchableOpacity>
						<Text style={{ left: 22, fontWeight: 'bold', bottom: 12 }}>Add to cart</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	render() {
		const { Data } = this.state;

                                    // Main View

		return (
			<View>
				<View style={Cart_Screen.Container}>
					<View style={Cart_Screen.Cart_Heading_View}>
						<Text style={Cart_Screen.Cart_Text}>Cart</Text>
					</View>
				</View>
				<FlatList horizontal={false} renderItem={this.ProductsView} data={Data} />
			</View>
		);
	}
}

const Cart_Screen = StyleSheet.create({
	Container: {
		flexDirection: 'row'
	},

	Cart_Heading_View: {
		flex: 1,
		justifyContent: 'center',
		left: 40
	},

	Cart_Text: {
		alignSelf: 'center',
		fontSize: 23,
		fontWeight: 'bold',
		color: '#1E9041'
	},
	Cart_Icon_View: {
		marginRight: 20,
		marginTop: 10
	}
});
