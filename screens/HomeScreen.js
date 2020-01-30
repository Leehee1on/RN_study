import React,{useEffect,useState} from 'react';
import {StyleSheet,Text, View, ScrollView, StatusBar,ActivityIndicator} from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base'; // Container, Content 추가로 import
import CardComponent from '../components/CardComponent'; // 카드 컴포넌트 추가

const HomeScreen = () => {
  const [feeds,setFeeds] = useState([])
  const [followings,setFollowings] = useState([])
  const [loading,setLoading] = useState(true)

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

  const fatchFollowing = () => {
    const data = {
      id: 2,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "follow_api",
        "get_following",
        ["anpigon", "", "blog", 10]
      ]
    };
    return fetch('https://api.steemit.com',
    {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => res.result.map(({following}) => following))
    .then(res => setFollowings(res))
    .then(()=>setLoading(false))
  }

  useEffect(()=>{
    fetchFeeds()
    fatchFollowing()
  },[])

  return (
    <>
    {loading? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000"/>
      </View>
      )
      :
      (
      <Container style={styles.container}>
        <StatusBar barStyle="dark-content" />
          <Content>
            <View style={{height:100}}>
              <View style={styles.storyHeader}>
                <Text style={{fontWeight:'bold'}}>Stories</Text>
                <View style={styles.storyList}>
                  <Icon name="md-play" style={{fontSize:14}}/>
                  <Text style={{fontWeight:'bold'}}>Watch All</Text>
                </View>
              </View>
              <View style={{flex:3}}>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 10,
                paddingEnd: 10
              }}>
                {followings.map((following,index) => (
                  <Thumbnail style={styles.thumb} key={index} source={{uri:`https://steemitimages.com/u/${following}/avatar`}} />
                ))}
              </ScrollView>
              </View>
            </View>
            {feeds.map((feed,index) => <CardComponent data={feed} key={index}/>)}
          </Content>
      </Container>
    )}
    </>
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
  },
  storyHeader : {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:7
  },
  storyList : {
    flexDirection:'row',
    alignItems:'center'
  },
  thumb:{
    marginHorizontal:5,
    borderColor:'pink',
    borderWidth:2
  },
  loadingContainer: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
