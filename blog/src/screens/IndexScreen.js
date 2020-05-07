import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext} from '../contexts/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button 
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Feather style={styles.icon} name="trash"/>
                        </View>
                    )
                }}
            />
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

export default IndexScreen;