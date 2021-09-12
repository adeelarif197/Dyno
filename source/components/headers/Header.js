import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Back_Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.header_View}>
                    <View style={styles.back_Icon_View}>
                        <TouchableOpacity style={styles.back_Icon_Touch} onPress={this.props.navigation}>
                            <Back_Icon name='arrow-back' size={25} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.heading_View}>
                        <Text style={styles.heading_Text}> {this.props.title} </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header_View: {
        flexDirection: 'row',
        alignSelf:'center'
    },

    back_Icon_View: {
        position:'absolute',
    },

    back_Icon_Touch: {
        backgroundColor: '#rgb(239,239,244)',
        padding: 10,
        borderRadius: 40,
        marginTop: 10,
        marginLeft: 10,
    },

    heading_View: {
        flex:1,
        justifyContent:'center',
        height:65,
        marginHorizontal:70,
    },

    heading_Text: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }
})
