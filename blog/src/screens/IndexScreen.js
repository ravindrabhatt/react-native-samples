import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import BlogContext from '../contexts/BlogContext';

const IndexScreen = () => {
    const value = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={value}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({})

export default IndexScreen;