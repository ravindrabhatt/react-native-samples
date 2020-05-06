import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../contexts/BlogContext';

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button 
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
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