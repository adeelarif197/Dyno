import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import DltIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReducersActions from '../redux/ReducersActions';
import ReducersProps from '../redux/ReducersProps';

import { connect } from 'react-redux';

class DisplayCartData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Data: [],
			quantity: 1
		};
	}
	render() {
		const { quantity } = this.state;
		const { item } = this.props.data;
		const price = `${parseInt(item.price).toFixed(2)}` * quantity;

		return (
			<View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', margin: 10 }}>
				<View
					style={{
						margin: 10
					}}
				>
					<Image style={{ height: 135, width: 110 }} source={item.image} />
				</View>
				<View style={{ flex: 1, padding: 10 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
					<Text style={{ fontWeight: 'bold', fontSize: 16 }}>{price}</Text>

					<View
						style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}
					>
						<TouchableOpacity
							disabled={quantity == 1 ? true : false}
							// onPress={() => this.setState({ quantity: quantity - 1 }, )}
							onPress={() => this.setState({ quantity: quantity - 1 }, () => this.props.total(-price))}
							style={{ padding: 1, borderWidth: 0.5, borderRadius: 5 }}
						>
							<Entypo name="minus" size={21} color="red" />
						</TouchableOpacity>

						<Text style={{ marginHorizontal: 10 }}>{quantity}</Text>

						<TouchableOpacity
							onPress={() => this.setState({ quantity: quantity + 1 }, () => this.props.total(price))}
							style={{ padding: 1, borderWidth: 0.5, borderRadius: 5 }}
						>
							<Entypo name="plus" size={21} color="red" />
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ marginLeft: 30, right: 20 }}>
					<TouchableOpacity
						onPress={() => {
							// alert(this.props.id);
							this.props.deleteCartItem(this.props.id);
						}}
						activeOpacity={0.7}
					>
						<DltIcon name="delete-forever" size={25} color={'red'} style={{ marginTop: 50 }} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default connect(ReducersProps, ReducersActions)(DisplayCartData);
