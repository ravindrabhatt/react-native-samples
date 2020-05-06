import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setSearchTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    console.log(results);
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <>
            <SearchBar 
                input={term}
                onInputChange={(inputValue) => setSearchTerm(inputValue)}
                onInputSubmitted={() => searchApi(term)}
            />
            {errorMsg ? <Text style={styles.error}>There was some error. Please try after some time.</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
});

export default SearchScreen;