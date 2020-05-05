import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View>
            <SearchBar 
                input={searchTerm}
                onInputChange={(inputValue) => setSearchTerm(inputValue)}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;