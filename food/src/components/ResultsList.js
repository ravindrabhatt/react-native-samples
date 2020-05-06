import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultsDetail'

const ResultsList = ({ results, title }) => {
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
                        <ResultDetails result={item}/>
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

export default ResultsList;