import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext} from '../contexts/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash"/>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={ () => navigation.navigate('Create') }>
                    <Feather name="plus" size={30} style ={ {marginRight: 10} } />
                </TouchableOpacity>
            )
        }
    };
};

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