import React, { Component,useState } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
let SoundPlayer = require('react-native-sound');
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Music player" component={Home} options={{ headerShown: true, }}   />
        <Stack.Screen name="PlaySong" component={PlaySong} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
 
    <View style={{}}>
    {listsong.map((data) => (
      <TouchableOpacity onPress={()=>navigation.navigate('PlaySong', {
        song: data.song,
        name: data.name,
      })} style={{backgroundColor:"#FAEBD7",marginTop:5,paddingVertical:10}}>
        <Text style={{fontSize:20,paddingLeft:10}}>{data.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
 
  );
}


function PlaySong({ route, navigation }) {
  const { song, name,pic} = route.params;
  let SoundPlayer = require('react-native-sound');
  let song1 = new SoundPlayer(song);
  const [pause, setpause] = useState(false);

  return (
    
    <View style={{ flex: 1,backgroundColor:"FFE4E1" }}>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:15}}>
      <Icon  name="hand-o-left" size={30} color="black" onPress={() => navigation.navigate('Music player')}/>
      <Text style={{fontSize:25,marginTop:"10%"}}>{name}</Text>
      <View/>
      </View>
      {/* <Image
              source={data.pic}
              resizeMode="contain"
              style={{flex: 1, width: '100%', height: 155}}
            /> */}
      <View style={{width:"100%",marginTop:"40%",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:"10%"}}>
      <TouchableHighlight style={{backgroundColor:"green",paddingHorizontal:10,paddingVertical:10,borderRadius:5}} onPress={()=> song1.play()}>
        <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>Play the song</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={()=> song1.pause()} style={{backgroundColor:"red",paddingHorizontal:10,paddingVertical:10,borderRadius:5}}>
        <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>Pause the song</Text>
      </TouchableHighlight></View>
    </View>
  );
}



const listsong = [
  {
    song:"track.mp3",
    name:"Chand Sifarish",
    //pic:require('./assets/'),
  },
  {
    song:"track2.mp3",
    name:"Pularikalo"
  },
  {
    song:"track3.mp3",
    name:"Akalayo Nee "
  },
  {
    song:"track4.mp3",
    name:"Vaathil Melle"
  },
  {
    song:"track5.mp3",
    name:"Gerua"
  },
];

