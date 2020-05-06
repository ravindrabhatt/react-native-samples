import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({input, onInputChange, onInputSubmitted}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>

            <TextInput style = {styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                input={input}
                onChangeText={onInputChange}
                placeholder="Search"
                onEndEditing={onInputSubmitted}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        borderRadius: 2,
        height: 50,
        marginHorizontal: 5,
        flexDirection: "row",
        marginTop: 15
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;