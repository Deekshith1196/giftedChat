/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';

 import Chat from './src/Chat';

 export default class App extends Component{
    render(){
      return(
        <View style={styles.containerStyle}>
          <Chat />
        </View>
      )
    }
 }

 const styles = StyleSheet.create(
   {
     containerStyle:{
       flex: 1,
       backgroundColor: '#FFFFFF'
     }
   }
 )