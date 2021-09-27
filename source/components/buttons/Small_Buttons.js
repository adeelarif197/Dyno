import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Primary_Color } from '../../screens/styles/Colors_Screen'

export default class Small_Buttons extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.navigation}>
                    <Text style={styles.title_Text}> {this.props.title} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 170,
        marginRight: 25,
        borderRadius: 5,
        backgroundColor: Primary_Color
    },

    title_Text: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 15,
    }
})