import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import ResultDetails from './ResultsDetail'

const ResultsList = ({ results, title, navigation }) => {
    if(!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(result) => result.id}
                data={results}
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id})}>
                            <ResultDetails result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    }
})

export default withNavigation(ResultsList);