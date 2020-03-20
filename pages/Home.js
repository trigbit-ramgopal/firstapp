import React, { Component } from 'react';
import { PermissionsAndroid,Platform,StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from './Constants';
import CommonStyle from '../styles/common.css';

export default class Home extends Component {

    navigate = this.props.navigation.navigate
    state = {
        noGuest: 5,
        multiData: []
    }

    componentDidMount(){
        if (Platform.OS === 'android') {
            this.requestMicPermission();
          }
      }


      async requestMicPermission() {
        //Calling the permission function
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'AndoridPermissionExample App RECORD AUDIO Permission',
            message: 'AndoridPermissionExample App needs access to your mic ',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            alert('You can use the Mic');
        } else {
          alert('Mic Permission Denied.');
        }
      }

    updateState = () => {
        this.setState({ multiData: [] });
        for (let i = 0; i < this.state.noGuest; i++) {
            this.state.multiData.push(i)
        }
        this.navigate('Profile', { name: this.state.multiData })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="#8A1DF1" translucent={false} />
                <TouchableOpacity onPress={() => this.updateState()} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>{Constants.state.name}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('FlexDesign')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Flex Design</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('FlexDesign2')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Flex Design2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('FlexDesign3')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Flex Design3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('FlexDesign4')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Flex Design4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('FlexDesign5')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Flex Design5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('Settings')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('Authentication')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Authentication</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('FlatList')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>FlatList</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('ModalExample')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Custom Dialog</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('SpeechText')} >
                    <View style={CommonStyle.homeButtons}>
                        <Text style={{ color: "#ffffff" }}>Speech To Text</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}