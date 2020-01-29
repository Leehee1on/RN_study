import * as WebBrowser from 'expo-web-browser';
import React,{useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ActivityIndicator,
  ProgressBarAndroid,
  StatusBar,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { TextInput } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [test,setTest] = useState(0)
  const onPressTest = () => {
    setTest(test+1)
    console.log(test)
  }
  return (
    <View style={styles.container}>
      <View>
        <Text onPress={onPressTest}>OnClick!</Text>
        <Text>{test}</Text>
      <TouchableOpacity>
        <Text>sss</Text>
      </TouchableOpacity>
      <Button 
        title="Press Me!"
      />
      <ActivityIndicator size="large" color="#ea6263"/>
      <ProgressBarAndroid />
      <TextInput/>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      </View>
      <View>
        <Text></Text>
        <Image
          source={require('../assets/images/robot-prod.png')}
          style={styles.welcomeImage}
          />
        <Image
          source={require('../assets/images/robot-dev.png')}
          style={styles.welcomeImage}
          />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen


// style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
