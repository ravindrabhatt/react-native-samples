import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const InputScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return <View>
                <Text style={styles.text}>Enter Name</Text>
                <TextInput 
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={(newValue) => setName(newValue)}
                />
                <Text style={styles.text}>My name is {name}</Text>

                <Text style={styles.text}>Enter Password:</Text>
                <TextInput 
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={(newValue) => setPassword(newValue)}
                />
                {password.length <= 5  && password.length > 0 ? <Text style = {styles.error}>Password must be longer than 5 characters </Text> : null}
            </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    
    text: {
        marginTop: 15,
    },
    
    error: {
        color: 'red'
    }
});

export default InputScreen;