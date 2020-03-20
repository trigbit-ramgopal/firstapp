import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FlexDesign extends Component {
    state = {
        noGuest: 4,
        multiData: []
    }
    componentDidMount() {
        for (let i = 0; i < this.state.noGuest; i++) {
            let dataa = this.state.multiData
            dataa.push(i)
            this.setState({multiData:dataa})
        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}>
                {
                    this.state.multiData.map((name, index) => {
                        return <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }} key={index}>
                            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                            <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                            <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                        </View>
                    }
                    )
                }
            </View>
        );
    }
}