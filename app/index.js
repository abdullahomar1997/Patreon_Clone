import { FlatList } from "react-native";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import users from "../assets/data/users";
import UserCard from "../src/components/UserCard";

export default function Page() {
  return (
    <Container>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard  user={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: 75px;
`