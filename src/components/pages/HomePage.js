import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Dimensions
} from 'react-native';




class HomePage extends Component {

    constructor() {
        super();
    }

    render() {

        const {
            mainContainer,
        } = styles;

        return (

            <>
                <StatusBar backgroundColor="#ef473a" barStyle="light-content" />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={mainContainer}>


                    </View>
                </SafeAreaView>
            </>

        );
    }
}


export default HomePage;


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f0f2'
    },

})