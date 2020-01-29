import React,{useState,useEffect} from 'react';
import { Image, Text, StyleSheet } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

// const dummyData = {
//   name:"Leehee",
//   date:"Jan 29, 2020",
//   thumbnailUrl: 'https://steemitimages.com/u/anpigon/avatar',
//   imgUrl:'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png',
//   likes:222,
//   comment:'Instagram 클론 코딩 공부하기'  
// }


const CardComponent = ({data}) => {
  console.log(data.image)
  const { image } = JSON.parse(data.json_metadata); // json_metadata에서 이미지 url을 파싱
  return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: `https://steemitimages.com/u/${data.author}/avatar` }} />
            <Body>
              <Text>{data.author}</Text>
              <Text note>{new Date(data.created).toDateString()}</Text>
            </Body>
          </Left>
        </CardItem>
        {image && image.length ?
          <CardItem cardBody>
            <Image 
              source={{ uri: image[0] }} 
              style={{ height:200, width:null, flex: 1 }} />
          </CardItem> : null
        }
        <CardItem style={{ height: 20 }}>
          <Text>{ data.active_votes.length } likes</Text>
        </CardItem>
        <CardItem>
          <Text style={{ fontWeight:'900'}}>{ data.title }</Text>
        </CardItem>
        <CardItem>
          <Text>
          { data.body.replace(/\n/g,' ').slice(0, 200) }
          </Text>
        </CardItem>
        <CardItem style={{ height:45 }}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart' style={{ color:'black', marginRight: 5 }}/> 
              <Text>{ data.active_votes.length }</Text>
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles' style={{ color:'black', marginRight: 5 }}/>
              <Text>{ data.children }</Text>
            </Button>
            <Button transparent>
              <Icon name='ios-send' style={{ color:'black' }}/>
            </Button>
          </Left>
          <Right>
            <Text>{ data.pending_payout_value }</Text>
          </Right>
        </CardItem>
      </Card>
  )

}

export default CardComponent

const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});