import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setSearchTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    return (
        <View>
            <SearchBar 
                input={term}
                onInputChange={(inputValue) => setSearchTerm(inputValue)}
                onInputSubmitted={() => searchApi(term)}
            />
            {errorMsg ? <Text style={styles.error}>There was some error. Please try after some time.</Text> : null}
            <Text>We found {results.length} results</Text>
            <ResultsList/>
            <ResultsList/>
            <ResultsList/>
        </View>
    )
};

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
});

export default SearchScreen;