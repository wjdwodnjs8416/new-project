import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
  }
  render(){

  
  return (
    <View style={styles.container}>
      <View style={styles.redView}/>
      <View style={styles.yellowView}/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redView: {
    height:50,
    width:50,
    backgroundColor : 'red',
    alignSelf:'flex-start'
  },
  yellowView: {
    height:50,
    width:50,
    backgroundColor : 'yellow',
    alignSelf:'center'
  }
});
