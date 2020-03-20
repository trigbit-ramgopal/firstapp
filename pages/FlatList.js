import React, { Component }  from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


function Item({ title }) {
    return (
        <TouchableOpacity onPress={() => alert(title)}>
            <View style={styles.item} >
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default class ModalExample extends Component {
      render(){
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
                numColumns={3}
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
    },
});
