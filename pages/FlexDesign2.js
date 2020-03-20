import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDesign2 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
        <View style={{ flex: 0.35, backgroundColor: 'red' }} /> 
        <View style={{ flex: 0.3, flexDirection: 'row',}} >
        <View style={{ flex:1, backgroundColor: '#2E9298', margin:5 }} />
        <View style={{ flex:1,backgroundColor: 'black', margin:5  }} />
        </View>
        <View style={{ flex: 0.35, backgroundColor: 'blue' }} />
      </View> 
        );
    }
}