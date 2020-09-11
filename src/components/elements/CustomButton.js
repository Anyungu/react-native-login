import React, { Component } from 'react';

import {
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    StyleSheet,
    ActivityIndicator
} from 'react-native';



class CustomButton extends Component {

    constructor(props) {
        super(props);
    }

    renderButtonorSpinner() {

        const {
            buttonLoading
        } = this.props;

        const {
            letsGoButtonContainer,
            letsGoButtonText,
            spinnerContainer
        } = styles;

        if (buttonLoading) {
            return (
                <View style={spinnerContainer}>
                    <ActivityIndicator
                        size="large"
                        color="#cb2d3e"
                    />

                </View>
            );
        } else {

            return (
                <TouchableOpacity onPress={this.props.onLetsGoPress}>
                    <View style={letsGoButtonContainer}>

                        <Text style={letsGoButtonText}>
                            Cool Lets Go
                        </Text>

                    </View>
                </TouchableOpacity>
            );

        }

    }

    render() {

        return this.renderButtonorSpinner();

    }
}



export default CustomButton;

const {
    height, width
} = Dimensions.get('screen');


const styles = StyleSheet.create({

    letsGoButtonContainer: {
        width: width * 0.45,
        borderRadius: width * 0.1,
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        paddingVertical: height * 0.0125,
        backgroundColor: '#ef473a',
        alignItems: 'center',
        justifyContent: 'center',

    },
    spinnerContainer: {
        width: width * 0.45,
        borderRadius: width * 0.1,
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        paddingVertical: height * 0.0125,
        alignItems: 'center',
        justifyContent: 'center',

    },
    letsGoButtonText: {
        fontSize: height * 0.03,
        color: 'white',

    },
})