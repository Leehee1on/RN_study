import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { Container, Content, Icon } from 'native-base'; // Container, Content 추가로 import
import CardComponent from '../components/CardComponent'; // 카드 컴포넌트 추가

const HomeScreen = () => {
  const [feeds,setFeeds] = useState([])

  const fetchFeeds = () => {
    const data = {
        id: 1,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "database_api",
          "get_discussions_by_created",
          [{ tag: "kr", limit: 20 }]
        ]
    };
    fetch('https://api.steemit.com', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => res.result)
    .then(res => setFeeds(res))
  }
  useEffect(()=>{
    fetchFeeds()
  },[])
  
  return (
    <Container style={styles.container}>
        <Content>
          {feeds.map(feed => <CardComponent data={feed}/>)}
        </Content>
    </Container>
  );
}

export default HomeScreen

// header-navigation
HomeScreen.navigationOptions = {
  headerLeft: <Icon name='ios-camera' style={{paddingLeft:20}}/>,
  headerTitle: 
  <View style={{flex:1,alignItems:"center"}}>
    <Text style={{fontSize:16,fontWeight:'bold'}}>
      Instagram
    </Text>
  </View>,
  headerRight: <Icon name='ios-send' style={{paddingRight:20}}/>,
}
// style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
