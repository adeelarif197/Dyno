import React, { Component } from 'react';
import { Text, View, FlatList, Alert ,Button  } from 'react-native';
import ReducersActions from '../redux/ReducersActions';
import ReducersProps from '../redux/ReducersProps';
import { connect } from 'react-redux';
import DltIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Small_Buttons from '../components/buttons/Small_Buttons';
export const dlt = <DltIcon name="delete-forever" size={25} color={'white'} />;
import DisplayCartData from './DisplayCartData';

class cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Data: [],
			quantity: 1,
			total: 0
		};
	}

	createTwoButtonAlert = () =>
    Alert.alert(
      "Order #2980",
      "Your Order Placed Successfully",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

	totalPrice = (price) => {
		this.setState({ total: this.state.total + price });
	};

	render() {
		console.log(this.props.cart);

		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'flex-end', padding: 15, flexDirection: 'row', right: 10 }}>
					<FontAwesome5 name="money-bill-wave" color="green" style={{ right: 10, top: 10 }} size={14} />
					<Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 15, top: 5, color: 'green' }}>
						Total: {this.state.total}
					</Text>
				</View>
				<FlatList
					horizontal={false}
					renderItem={({ item, index }) => (
						<DisplayCartData data={item.cartData} id={index} total={this.totalPrice} />
					)}
					data={this.props.cart}
					keyExtractor={(item, index) => index}
					ListHeaderComponent={() => {
						if (this.props.cart) {
							return this.state.Data;
						} else {
							return null;
						}
					}}
					ListEmptyComponent={() => {
						return (
							<Text numberOfLines={1} style={{ textAlign: 'center', marginVertical: 20, fontSize: 16 }}>
								No Products Added Yet
							</Text>
						);
					}}
				/>

				<View style={{bottom:5}}>
					<Button title={"Submit Order"} onPress={this.createTwoButtonAlert} style={{marginHorizontal: 20}} color="#218c74"/>
				</View>
			</View>
		);
	}
}
export default connect(ReducersProps, ReducersActions)(cart);
