import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Forward from 'react-native-vector-icons/Ionicons'
import Plus from 'react-native-vector-icons/Entypo'
import Header from '../../components/headers/Header'
import { Primary_Color } from '../styles/Colors_Screen'

export default class Wallet_Screen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header title='Wallet' navigation={() => this.props.navigation.navigate('Home_Screen')}></Header>

                <View style={{ height: '33%', backgroundColor: 'white', elevation: 10, marginHorizontal: 20, borderRadius: 20, marginTop: 50 }}>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text>Texi Cash</Text>
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 43 }}>PKR 0.00</Text>
                        </View>

                        <View style={{ marginRight: 10, }}>
                            <Forward name='chevron-forward' size={35} />
                        </View>
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                        <Text style={{ fontSize: 19 }}>Auto-refill is off</Text>
                    </View>

                    <View style={styles.container3}>
                        <TouchableOpacity >
                            <Text style={styles.title_Text}> Add Cash </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 30, borderBottomWidth: 1.5, borderBottomColor: 'lightgray' }}>
                    <TouchableOpacity style={{ padding: 20 }}>
                        <Text>Add Payment Method</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 20, marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Ride Profiles</Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity style={{borderWidth:1,flexDirection:'row'}}>
                        <View style={{borderWidth:1,padding:10,borderRadius:50}}>
                        </View>

                        <View style={{marginLeft:50}}>
                            <Text>sadadadsadada</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container3: {
        backgroundColor: Primary_Color,
        marginRight: 140,
        marginTop: 20,
        marginLeft: 20

    },

    title_Text: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 18
    }
})