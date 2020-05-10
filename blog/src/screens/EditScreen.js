import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext} from '../contexts/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    return (
        <View>
            <Text>Edit Screen</Text>
            
        </View>
    )
}

const styles=StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,

    },
    icon: {
        fontSize: 24
    }
})

export default EditScreen;