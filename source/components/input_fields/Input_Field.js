import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import OutlineInput from 'react-native-outline-input';
import { Primary_Color } from '../../../source/screens/styles/Colors_Screen'

export default class Input_Field extends Component {
    render() {
        return (
            <View>
                <View style={styles.email_View}>
                        <OutlineInput
                            value={this.props.value}
                            onChangeText={(text) => this.setState({ email: text })}
                            label={this.props.Title}
                            activeValueColor={Primary_Color}
                            activeBorderColor={Primary_Color}
                            activeLabelColor={Primary_Color}
                            passiveBorderColor={Primary_Color}
                            passiveLabelColor={Primary_Color}
                            passiveValueColor={Primary_Color}
                        />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    email_View: {
        marginTop: 80,
        marginHorizontal: 20
    },
})