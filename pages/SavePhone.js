import React, { Component } from "react";
import {
    BackHandler,
    TouchableOpacity,
    TextInput,
    Text,
    View,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/analytics';
import CommonStyle from "../styles/common.css";
import Database from "../firebase/Database";

export default class SavePhone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: "",
            mobile: "",
            mobileForm: ""
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.logout = this.logout.bind(this);
        this.saveMobile = this.saveMobile.bind(this);
    }

    async componentDidMount() {
        try {
            // Get User Credentials
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
            let user = await firebase.auth().currentUser;
            firebase.analytics().setCurrentScreen('SavePhone');
            // Listen for Mobile Changes
            Database.listenUserMobile(user.uid, (mobileNumber) => {
                this.setState({
                    mobile: mobileNumber,
                    mobileForm: mobileNumber
                });
            });

            this.setState({
                uid: user.uid
            });

        } catch (error) {
            console.log(error);
        }
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('Home')
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }


    async logout() {
        try {
            await firebase.auth().signOut();
            await firebase.analytics().logEvent('logout');
            this.props.navigation.navigate('Home')
        } catch (error) {
            console.log(error);
        }
    }


    saveMobile() {
        // Set Mobile
        if (this.state.uid && this.state.mobileForm) {
            Database.setUserMobile(this.state.uid, this.state.mobileForm);
            Keyboard.dismiss();
            this.addCustomEvent();
        }
    }

    async addCustomEvent() {
        await firebase.analytics().logEvent('save_number_click', {
            selected_screen: "Save Phone ios",
            loged_in_user_id: String(this.state.uid),
            user_phone_number: this.state.mobileForm
        });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View >
                    <Text style={styles.heading}>Hello UserId: {this.state.uid}</Text>
                    <Text style={styles.heading}>Mobile Number (From Database): {this.state.mobile}</Text>
                    <View style={styles.form}>
                        <TextInput
                            placeholder="Enter Mobile Number"
                            style={CommonStyle.editText}
                            value={this.state.mobileForm}
                            onChangeText={(mobileForm) => this.setState({ mobileForm })}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <TouchableOpacity onPress={this.saveMobile} >
                                <View style={CommonStyle.homeButtons}>
                                    <Text style={{ color: "#ffffff" }}>Save</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.logout} >
                                <View style={CommonStyle.homeButtons}>
                                    <Text style={{ color: "#ffffff" }}>Logout</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({

    heading: {
        textAlign: "center",
        paddingTop: 16
    },

    form: {
        paddingTop: 50,
        alignItems: 'center'
    }

});
