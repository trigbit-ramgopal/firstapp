import {
    TouchableOpacity,
    TextInput,
    Text,
    View,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/analytics';
import CommonStyle from "../styles/common.css";

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            response: ""
        };
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }


    async componentDidMount() {
        try {
            firebase.analytics().setCurrentScreen('Authentication');
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.props.navigation.navigate('SavePhone')
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    async signup() {
        Keyboard.dismiss();
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            await firebase.analytics().logEvent('sign_up');
            this.props.navigation.navigate('SavePhone')
        } catch (error) {
            alert(error.toString());
        }

    }

    async login() {
        Keyboard.dismiss();
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            await firebase.analytics().logEvent('login');
            this.props.navigation.navigate('SavePhone')
        } catch (error) {
            alert(error.toString());
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View>
                    <View style={styles.formGroup}>
                        <Text style={styles.title}>Firebase Sample</Text>
                        <TextInput
                            style={CommonStyle.editText}
                            placeholder="Email Address"
                            onChangeText={(email) => this.setState({ email })}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={CommonStyle.editText}
                            placeholder="Password"
                            onChangeText={(password) => this.setState({ password })}
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity onPress={this.signup} >
                                <View style={CommonStyle.homeButtons}>
                                    <Text style={{ color: "#ffffff" }}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.login} >
                                <View style={CommonStyle.homeButtons}>
                                    <Text style={{ color: "#ffffff" }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    formGroup: {
        paddingTop: 50,
        alignItems: "center"
    },
    title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#000",
        fontSize: 35,
        fontWeight: "bold",
        opacity: 0.8,
    },
    response: {
        textAlign: "center",
        paddingTop: 0,
        padding: 50
    }
});