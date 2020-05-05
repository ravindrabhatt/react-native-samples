import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = props => {
  return (
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
      onPress={ () => { props.navigation.navigate('Components')}}
      title="Go to Components Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('List')}}
      title="Go to List Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('Images')}}
      title="Go to Image Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('Counter')}}
      title="Go to Counter Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('CounterWithReducer')}}
      title="Go to Counter With Reducer Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('Color')}}
      title="Go to Color Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('ColorSelect')}}
      title="Go to Color Select Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('ColorSelectWithReducer')}}
      title="Go to Color Select With Reducer Demo" 
    />
    <Button 
      onPress={ () => { props.navigation.navigate('Input')}}
      title="Go to Input Demo" 
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
