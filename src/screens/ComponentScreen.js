import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name = 'Ravi';

    return (
    <View>
        <Text style={styles.mainStyle}> Getting started with React Native! </Text>
        <Text style={styles.subHeaderStyle}> My name is {name} </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    mainStyle: {
        fontSize: 45
    },subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;