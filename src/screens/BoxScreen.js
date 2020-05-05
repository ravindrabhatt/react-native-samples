import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        flexDirection: 'row',
        height: 100
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        top: 10
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        top: 10
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        // flex: 1,
        alignSelf: 'flex-end',
        ...StyleSheet.absoluteFillObject,

        //same as below
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
    },
});

export default BoxScreen;