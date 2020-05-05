import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View >
            <View style={styles.headerStyle}>
                <Text>App</Text>
            </View>
            <View style={styles.viewStyle}>
                <View style={styles.viewOneStyle}></View>
                <View style={styles.viewTwoStyle}></View>
                <View style={styles.viewThreeStyle}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 40
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewOneStyle: {
        backgroundColor: 'red',
        height: 100,
        width: 100
    },
    viewTwoStyle: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        top: 100,
    },
    viewThreeStyle: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
    }
});

export default BoxScreen;