import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';



class CustomTextInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {
            textInputContainer,
            textTextInputSpecs
        } = styles;

        return (


            <View style={textInputContainer}>
                <TextInput
                    placeholder={this.props.placeholder}
                    placeholderTextColor="rgba(204, 50, 50, 0.56)"
                    value={this.props.inputText}
                    onChangeText={value => this.props.onchangeText(this.props.what, value)}
                    style={textTextInputSpecs}
                    keyboardType={this.props.keyboardType}
                    secureTextEntry={this.props.secureTextEntry}

                />

            </View>

        );
    }
}



export default CustomTextInput;

const {
    height, width
} = Dimensions.get('screen');


const styles = StyleSheet.create({

    textInputContainer: {
        width: width * 0.75,
        backgroundColor: 'white',
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTextInputSpecs: {
        color: '#cb2d3e',
        fontSize: height * 0.03,
        paddingVertical: height * 0.0125,


    },
})