import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const [err, setErr] = useState('');
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        setErr('');

        try{
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        }catch(err){
            setErr("Failed to get reqeust");
        }
    };

    useEffect(()=> {
        getResult(id);
    }, [])

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return <Image 
                        style={styles.image}
                        source={{uri: item}}
                    />
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    image: {
        borderRadius: 4,
        width: 250,
        height: 120, 
        marginBottom: 5,
    },
});

export default ResultShowScreen;