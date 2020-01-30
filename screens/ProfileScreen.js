import React,{useState,useEffect} from 'react';
import { Platform,StyleSheet,View,Text, Image,Dimensions } from 'react-native';
import { Icon, Container, Content, Button} from 'native-base';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const images = [
  "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973__480.jpg",
  "https://cdn.pixabay.com/photo/2019/01/05/17/05/man-3915438__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/04/22/38/road-3856796__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/25/21/45/crystal-ball-photography-3894871__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg",
  "https://cdn.pixabay.com/photo/2017/05/05/16/57/buzzard-2287699__480.jpg",
  "https://cdn.pixabay.com/photo/2018/08/06/16/30/mushroom-3587888__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/16/18/12/open-fire-3879031__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/24/02/05/lichterkette-3834926__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/29/19/29/autumn-3846345__480.jpg"
  ]

const ProfileScreen = () => {
  const [index,setIndex] = useState(0)
  const onPressActive = index => setIndex(index)

  const SectionOne = () => {
    return images.map((image,index)=>(
      <View key={index} style={{ width: width/3, height: width/3 }}>
        <Image source={{ uri: image }} style={{ flex:1 }}/>
      </View>))
  }

  const Section = () => {
    if(index === 0){
      return <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          {SectionOne()}
        </View>
    } else if (index === 1) {
      return <View><Text>1</Text></View>
    } else if (index === 2) {
      return <View><Text>2</Text></View>
    } else if (index === 3) {
      return <View><Text>3</Text></View>
    } 
  }
  return (
    <Content>
      <View style={{flexDirection:'row', paddingTop:10}}>
        <View style={{flex:1, alignItems:'center'}}>
          <Image source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }}
            style={styles.profileImg}/>
        </View>
        <View style={{flex:3}}>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View style={styles.textWrapper}>
              <Text>22</Text>
              <Text style={styles.text}>posts</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text>11</Text>
              <Text style={styles.text}>follower</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text>11</Text>
              <Text style={styles.text}>following</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <Button bordered dark
              style={styles.editProfile}>
              <Text>Edit Profile</Text>
            </Button>
            <Button bordered dark small icon
                style={styles.settingButton}>
              <Icon name={Platform.OS === 'ios'? 'ios-settings':'settings'} style={{fontSize:18}}/>
            </Button>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal:10, paddingVertical:10}}>
        <Text style={{fontWeight:'bold'}}>이희원</Text>
        <Text>React Native Study</Text>
        <Text>www.github.com/Leehee1on</Text>
      </View>
      <View style={styles.segment}>
        <Button transparent onPress={()=>onPressActive(0)}>
            <Icon name='ios-apps' style={index === 0 ? {color:'black'}:{color:'gray'}}/>
        </Button>
        <Button transparent onPress={()=>onPressActive(1)}>
            <Icon name='ios-list'  style={index === 1 ? {color:'black'}:{color:'gray'}}/>
        </Button>
        <Button transparent onPress={()=>onPressActive(2)}>
            <Icon name='ios-people'  style={index === 2 ? {color:'black'}:{color:'gray'}}/>
        </Button>
        <Button transparent onPress={()=>onPressActive(3)}>
            <Icon name='ios-bookmark'  style={index === 3 ? {color:'black'}:{color:'gray'}}/>
        </Button>
      </View>
      {Section()}
    </Content>
  )
}


ProfileScreen.navigationOptions = {
  headerLeft: <Icon name='md-person-add' style={{paddingLeft:20}}/>,
  headerTitle: 
  <View style={{flex:1,alignItems:"center"}}>
    <Text style={{fontSize:16,fontWeight:'bold'}}>
      Leehee
    </Text>
  </View>,
  headerRight: <Entypo name='back-in-time' style={{paddingRight:20,fontSize:32}}/>,
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize:10, color:'gray'
  },
  textWrapper : {
    alignItems:'center'
  },
  profileImg : {
    width:75,
    height:75,
    borderRadius:37.5
  },
  editProfile:{
    flex:4,
     marginLeft:10, 
    justifyContent:'center', 
    height:30, 
    marginTop:10
  },
  settingButton: {
    flex:1,
    marginRight:10,
    marginLeft:5,
    justifyContent:'center',
    height:30,
    marginTop:10
  },
  segment: {
    flexDirection: 'row',
    justifyContent:'space-around',
    borderTopWidth:1,
    borderTopColor:'#eae5e5' 
  },
  imageView :{
    width: width/3,
    height: width/3
  }
});

export default ProfileScreen
