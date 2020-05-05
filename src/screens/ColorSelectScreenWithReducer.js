import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorSelect from '../components/ColorSelect';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
    switch (action.type){
        case "change_red":
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : { ...state, red: state.red + action.payload };
            
        case "change_green":
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload };
        
        case "change_blue":
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload };

        default:
            return;
    } 
};

const ColorSelectScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state;

    return (
        <View>
            <ColorSelect 
                color='Red' 
                onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}  
                onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}  
            />
            <ColorSelect 
                color='Green' 
                onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}  
                onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}  
            />
            <ColorSelect 
                color='Blue' 
                onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}  
                onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
            />
            <View 
                style={{ 
                    height: 100, 
                    width: 100, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorSelectScreenWithReducer;