import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDesign4 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row'}} > 
        <View style={{ flex:1,backgroundColor: 'black', margin:5  }} />
        <View style={{ flex:1,backgroundColor: 'green', margin:5  }} />
        </View>
        <View style={{ flex: 1, backgroundColor: 'red' }} /> 
        <View style={{ flex: 1, flexDirection: 'row'}} >
        <View style={{ flex:2, backgroundColor: '#2E9298', margin:5 }} />
        <View style={{ flex:1,backgroundColor: 'black', margin:5  }} />
        </View>
      </View> 
        );
    }
}