import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

export default function UserCard({user}){
  return(
    <Container source={{uri:user.coverImage}}>
    <Overlay/>
    <UserImage src={user.avatar} />
    <View>
    <Text style={{color:'white' , fontSize:20,fontWeight:'500',marginBottom:5}} >{user.name} </Text>
    <Text style={{color:'white'}}  >@{user.handle}</Text>
    </View>
    </Container>
  )
}

const Overlay = styled.View`
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const Container = styled.ImageBackground`
  background-color: gray;
  padding: 10px;
  flex-direction: row;
  align-items: flex-end;
  border-radius: 10px;
  overflow: hidden;
  margin-vertical:5px;
`
const UserImage = styled.Image`
  width:100px;
  height: 100px;
  border-radius:100px;
  border-color: white;
  border-width: 3px;
  margin-right: 15px;
`