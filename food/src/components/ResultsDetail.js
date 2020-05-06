import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} stars, {result.review_count} reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        borderRadius: 4,
        width: 250,
        height: 120, 
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',

    }
})

export default ResultsDetail;