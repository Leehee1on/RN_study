import React from 'react';
import { ScrollView, StyleSheet,View,Text,ActivityIndicator } from 'react-native';
import {Icon} from 'native-base';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000"/>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  headerLeft: <Icon name='ios-camera' style={{paddingLeft:20}}/>,
  headerTitle: 
  <View style={{flex:1,alignItems:"center"}}>
    <Text style={{fontSize:16,fontWeight:'bold'}}>
      Instagram
    </Text>
  </View>,
  headerRight: <Icon name='ios-send' style={{paddingRight:20}}/>,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    textAlign:"center"
  }
});

