import React, { Component } from 'react';
import { Text, View } from 'react-native'; 

export default class Profile extends Component {
  render() {
    return (
      this.props.route.params.name.map((name,index) => {
         return <View key={index} >
          <Text>{name}</Text>
        </View>
      }
      )
    );
  }
}