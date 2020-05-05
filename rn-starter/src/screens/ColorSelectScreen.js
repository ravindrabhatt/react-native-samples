import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorSelect from '../components/ColorSelect';

const COLOR_INCREMENT = 20;

const ColorSelectScreen = () => {
    
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color){
            case "Red":
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
                
            case "Green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            
            case "Blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }    
    };

    return (
        <View>
            <ColorSelect 
                color='Red' 
                onIncrease={() => setColor("Red",  COLOR_INCREMENT)}  
                onDecrease={() => setColor("Red",  -1 * COLOR_INCREMENT)}
            />
            <ColorSelect 
                color='Green' 
                onIncrease={() => setColor("Green",  COLOR_INCREMENT)} 
                onDecrease={() => setColor("Green",  -1 * COLOR_INCREMENT)}
            />
            <ColorSelect 
                color='Blue' 
                onIncrease={() => setColor("Blue",  COLOR_INCREMENT)} 
                onDecrease={() => setColor("Blue",  -1 * COLOR_INCREMENT)}
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

export default ColorSelectScreen;