import  React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case "increment_counter":
            return { ...state, counter: state.counter + action.payload }
        case "decrement_counter":
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;    
    }
}

const CounterScreenWithReducer = () => {
    const [ state, dispatch] = useReducer(reducer, { counter: 0 });
    const {counter} = state;

    return (
        <View>
            <Button 
                title='Increase'
                onPress={() => dispatch( {type: "increment_counter", payload: 1 })}
            />
            <Button 
                title='Decrease'
                onPress={() => dispatch( {type: "decrement_counter", payload: 1 })}
            />
            <Text>Current count = {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreenWithReducer;