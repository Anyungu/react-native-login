import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Text
} from 'react-native';

import
CustomTextInput
    from '../elements/CustomTextInput';

import CustomButton from '../elements/CustomButton';
import { Actions } from 'react-native-router-flux';


class LoginPage extends Component {

    constructor() {
        super();
        this.onchangeText = this.onchangeText.bind(this);
        this.onLetsGoPress = this.onLetsGoPress.bind(this);
    }

    state = {
        emailText: '',
        passwordText: '',
        buttonLoading: false,
        loginErrorMessage: ''
    }

    displayErrorMessage() {
        const {
            loginErrorText
        } = styles;

        if (this.state.loginErrorMessage !== '') {
            return (
                <Text style={loginErrorText}>
                    {this.state.loginErrorMessage}
                </Text>
            );
        }
    }

    validateInput() {


        if (this.state.emailText === '') {
            this.setState({
                loginErrorMessage: 'Email Cannot be Empty',
                buttonLoading: false
            });
            return false;
        }

        if (this.state.passwordText === '') {
            this.setState({
                loginErrorMessage: 'Password Cannot be Empty',
                buttonLoading: false
            });
            return false;
        }

        this.setState({
            loginErrorMessage: '',
            buttonLoading: true
        });
        return true;

    }
    onchangeText(what, value) {

        if (what === "email") {

            this.setState({ emailText: value, loginErrorMessage: '' });

        } else {

            this.setState({ passwordText: value, loginErrorMessage: '' });

        }

    }

    onLetsGoPress() {



        if (this.validateInput()) {

            setTimeout(() => {
                Actions.HomePage({ user: this.state.emailText, password: this.state.passwordText });
                this.setState({
                    buttonLoading: false
                })

            }, 5000);

        }



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

                        <CustomTextInput
                            placeholder=" Email "
                            onchangeText={this.onchangeText}
                            keyboardType="email-address"
                            secureTextEntry={false}
                            value={this.state.emailText}
                            what="email"

                        />

                        <CustomTextInput
                            placeholder=" Password "
                            onchangeText={this.onchangeText}
                            keyboardType="default"
                            secureTextEntry={true}
                            value={this.state.passwordText}
                            what="pass"
                        />
                        {this.displayErrorMessage()}
                        <CustomButton
                            onLetsGoPress={this.onLetsGoPress}
                            buttonLoading={this.state.buttonLoading}
                        />

                    </View>
                </SafeAreaView>
            </>

        );
    }
}


export default LoginPage;


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: '#b2b2b2',
        alignItems: 'center'
    },
    loginErrorText: {
        color: 'red'
    }

})