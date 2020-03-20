import React, { Component } from 'react';
import { Dimensions,Image,StyleSheet,View } from 'react-native';

export default class FlexDesign5 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row'}} > 
        <View style={{ flex:1,backgroundColor: 'black', margin:5  }} />
        <View style={{ flex:1, flexDirection:'column', margin:1 }}>
        <View style={{ flex:1,backgroundColor: 'green', margin:5  }} />
        <View style={{ flex:2,backgroundColor: '#2E9298', margin:5  }} />
        </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'red',margin:5 }} /> 
        <View style={{ flex: 1, flexDirection: 'row',margin:5 }} >
        <View style={{ flex:2, flexDirection:'column'}}>
        <View style={{ flex:1,backgroundColor: 'green', margin:5  }} />
        <View style={{ flex:1,backgroundColor: '#2E9298', margin:5  }} />
        <View style={{ flex:1,backgroundColor: 'red', margin:5  }} />
        </View>
        <View style={{ flex:1,
        justifyContent:"center",
        alignItems:"center",}}>
        <Image source={{ uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.image} />
        </View>
        </View>
      </View> 
        );
    }
}

const styles = StyleSheet.create ({
    image: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        borderRadius: Dimensions.get('window').width /3,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black"
      }
 })