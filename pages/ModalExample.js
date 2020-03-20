import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet,Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

export default class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.Alert_Main_View}>
                            <Text style={styles.Alert_Title}>Custom Alert Dialog Title.</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#fff' }} />
                            <Text style={styles.Alert_Message}> Are You Sure(Alert Dialog Message). </Text>
                            <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} />
                            <View style={{ flexDirection: 'row', height: '30%' }}>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={this.ok_Button}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.TextStyle}> OK </Text>
                                </TouchableOpacity>
                                <View style={{ width: 1, height: '100%', backgroundColor: '#fff' }} />
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={() => { this.setModalVisible(!this.state.modalVisible) }}
                                    activeOpacity={0.7}
                                >
                                <Text style={styles.TextStyle}> CANCEL </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer :{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: (Platform.OS == 'ios') ? 20 : 0
    },

    Alert_Main_View:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : "#009688", 
      height: 200 ,
      width: '90%',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius:7,
    },
     
    Alert_Title:{ 
      fontSize: 25, 
      color: "#fff",
      textAlign: 'center',
      padding: 10,
      height: '28%'
    },

    Alert_Message:{ 
        fontSize: 22, 
        color: "#fff",
        textAlign: 'center',
        padding: 10,
        height: '42%'
      },
     
    buttonStyle: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
       
    TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 22,
        marginTop: -5
    }     
});